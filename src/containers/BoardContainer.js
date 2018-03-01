import React, { Component } from 'react';
import Header from '../components/Header';
import Board from '../components/board/Board';

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddBoard: false,
      boardTitle: "",
      board: null
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
      })
      .catch(e => {});
  };

  addNewTrack = () => {
    const boardId = 3;
    fetch(`http://localhost:3010/boards/${boardId}/tracks`, {
      method: "POST",
      body: JSON.stringify({ title: 'New track', boardId }),
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

  render() {
    return (
      <div>
        <Header />
        <Board
          board={this.state.board}
          add={this.addNewBoard}
          addTrack={this.addNewTrack}
        />
      </div>
    );
  }
}

export default BoardContainer;