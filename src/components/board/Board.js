import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Track from "./Track";
import { board, boardActions, actionBar } from "../../styles/Board.styles";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTitle: '',
      showAddBoard: false
    };
  }

  onDragStart = () => {
    console.log("drag started!");
  };
  onDragUpdate = () => {};
  onDragEnd = () => {
    console.log("drag stopped");
  };

  render() {
    if (!this.props.board) {
      return <div />;
    }
    if (!this.props.board.tracks.length) {
      return <button type="button" onClick={() => this.props.addTrack()}>
          Add a track
        </button>;
    }
    return <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
        <BoardActions {...this.props} />
        <div className={board}>
          {this.props.board.tracks &&
            this.props.board.tracks.map(track => (
              <Track title={track.title} key={track.id} tasks={this.props.tasks} />
            ))}
        </div>
      </DragDropContext>;
  }
}

class BoardActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTitle: '',
      showAddBoard: false,
      showAddTask: false,
      taskTitle: '',
      taskDesc: ''
    };
  }
  render() {
    return <div className={boardActions}>
        <h3>{this.props.board.title}</h3>
        <div className={actionBar}>
          <button className="btn" type="button" onClick={() => this.setState(
                {
                  showAddBoard: !this.state.showAddBoard
                }
              )}>
              <span>
                <i class="material-icons">dashboard</i>
                Add board
              </span>
          </button>
          <button className="btn" type="button" onClick={() => this.setState(
                {
                  showAddTask: !this.state.showAddTask
                }
              )}>
              <span><i class="material-icons">assignment</i> Add task</span>
          </button>
        </div>
        {this.state.showAddBoard && <div>
            <label>
              Board title:
              <input type="text" name="boardTitle" id="boardTitle" onChange={e => this.setState(
                    { boardTitle: e.target.value }
                  )} />
            </label>
            <button type="button" onClick={() => this.props.add(this.state.boardTitle)}>
              Add
            </button>
          </div>}
        {this.state.showAddTask && <div>
            <label>
              Task title:
              <input type="text" name="taskTitle" id="taskTitle" onChange={e => this.setState(
                    { taskTitle: e.target.value }
                  )} />
            </label>
            <label>
              Task description:
              <textarea name="taskTitle" id="taskTitle" onChange={e => this.setState(
                    { taskDesc: e.target.value }
                  )} />
            </label>
            <button type="button" onClick={() => this.props.addTask(this.state.taskTitle, this.state.taskDesc)}>
              Add
            </button>
          </div>}
      </div>;
  }
};

export default Board;