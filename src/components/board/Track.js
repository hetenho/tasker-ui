import React, { Component } from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { track } from '../../styles/Board.styles';

class Track extends Component {
  render() {
    return <Droppable droppableId={this.props.title} type="PERSON">
        {(provided, snapshot) => <div ref={provided.innerRef} className={track} style={{ backgroundColor: snapshot.isDraggingOver ? "#f5f5f5" : "white" }} {...provided.droppableProps}>
            {this.props.tasks && this.props.tasks.map(task => <Task task={task} {...this.props} key={task.id} />)}
            {provided.placeholder}
          </div>}
      </Droppable>;
  }
}

const Task = ({ task, ...props}) => {
  return <Draggable draggableId={`${task.title}-${task.id}`} type="TASK" index={task.orderNumber}>
      {(provided, snapshot) => <div>
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <h4>{task.title}</h4>
          </div>
          {provided.placeholder}
        </div>}
    </Draggable>;
};

export default Track;