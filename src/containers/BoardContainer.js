import React, { Component } from 'react';
import Header from '../components/Header';
import Board from '../components/board/Board';

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddBoard: false,
      boardTitle: "",
      board: null,
      tasks: null,
    };

    this.fetchBoard();
  }
  addNewBoard = title => {
    fetch("http://localhost:3010/boards", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TASKER_TOKEN")
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(e => {});
  };
  fetchBoard = () => {
    const boardId = 3;
    fetch(`http://localhost:3010/boards/${boardId}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TASKER_TOKEN")
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ board: res.board });
        this.fetchTasks();
      })
      .catch(e => {});
  };

  addNewTrack = () => {
    const boardId = 3;
    fetch(`http://localhost:3010/boards/${boardId}/tracks`, {
      method: "POST",
      body: JSON.stringify({ title: "New track", boardId }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TASKER_TOKEN")
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // Should receive the board with tracks included in the JSON Object
        this.setState({ board: res.board });
      })
      .catch(e => {});
  };

  addNewTask = (title, description) => {
    const boardId = 3;
    const trackId = 3;
    fetch(`http://localhost:3010/tasks/`, {
      method: "POST",
      body: JSON.stringify({ title, description, trackId, boardId }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TASKER_TOKEN")
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ tasks: [...this.state.tasks, res.task] });
      })
      .catch(e => {});
  };

  fetchTasks = () => {
    const boardId = 3;
    fetch(`http://localhost:3010/tasks/${boardId}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("TASKER_TOKEN")
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ tasks: res.tasks });
      })
      .catch(e => {console.log(e)});
  };

  render() {
    return (
      <div>
        <Header />
        <Board
          board={this.state.board}
          tasks={this.state.tasks}
          add={this.addNewBoard}
          addTrack={this.addNewTrack}
          addTask={this.addNewTask}
        />
      </div>
    );
  }
}

export default BoardContainer;