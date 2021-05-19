import React from 'react';
import { useDrag } from 'react-dnd';

const Piece = (props) => {

  const { image, size, side, x, y, connectDragSource, isOver } = props;

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'piece',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div style={{
      width: `${side}px`,
      height: `${side}px`,
      margin: '0 -1px -1px',
      border: '1px solid black',
      backgroundImage: `url(${image})`,
      backgroundSize: `${size}px ${size}px`,
      backgroundPosition: `-${x}px -${y}px`,
      opacity: `${isOver ? '0.2' : '1'}`,
      cursor: 'move',
    }} ref={drag} {...collected}>

    </div>
  )

};

export default Piece;
