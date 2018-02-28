import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Header from '../components/Header';
import Track from "../components/board/Track";
import { board } from '../styles/Board.styles';

class BoardContainer extends Component {
  onDragStart = () => {
    console.log('drag started!');
  };
  onDragUpdate = () => {
  };
  onDragEnd = () => {
    console.log('drag stopped');
  };
  render() {
    return <div>
        <Header />
        <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
          <div className={board}>
            <Track title="Backlog" />
            <Track title="Selected for development" />
            <Track title="In progress" />
            <Track title="In testing" />
            <Track title="Done" />
          </div>
        </DragDropContext>
      </div>;
  }
}

export default BoardContainer;