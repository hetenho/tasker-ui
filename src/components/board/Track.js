import React, { Component } from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { track } from '../../styles/Board.styles';

class Track extends Component {
  render() {
    return <Droppable droppableId={this.props.title} type="PERSON">
        {(provided, snapshot) => <div ref={provided.innerRef} className={track} style={{ backgroundColor: snapshot.isDraggingOver ? "#f5f5f5" : "white" }} {...provided.droppableProps}>
            <div>
              <Draggable draggableId={`${this.props.title}-1`} type="PERSON" index={0}>
                {(provided, snapshot) => <div>
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <h4>My draggable 1</h4>
                    </div>
                    {provided.placeholder}
                  </div>}
              </Draggable>
              <Draggable draggableId={`${this.props.title}-2`} type="PERSON" index={1}>
                {(provided, snapshot) => <div>
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <h4>My draggable 2</h4>
                    </div>
                    {provided.placeholder}
                  </div>}
              </Draggable>
              <Draggable draggableId={`${this.props.title}-3`} type="PERSON" index={2}>
                {(provided, snapshot) => <div>
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <h4>My draggable 3</h4>
                    </div>
                    {provided.placeholder}
                  </div>}
              </Draggable>
            </div>
            {provided.placeholder}
          </div>}
      </Droppable>;
  }
}

export default Track;