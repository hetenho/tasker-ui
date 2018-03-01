import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Track from "./Track";
import { board } from '../../styles/Board.styles';

class Board extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
        <button type="button" onClick={() => this.setState({
              showAddBoard: !this.state.showAddBoard
            })}>
          Add new board
        </button>
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
        <div className={board}>
          {this.props.board.tracks &&
            this.props.board.tracks.map(track => (
              <Track title={track.title} key={track.id} />
            ))}
        </div>
      </DragDropContext>;
  }
}

export default Board;