import React from 'react';
import { useDrop } from 'react-dnd';
import Piece from './Piece';

const Cell = (props) => {
  const { image, size, level, position, isOver, onSwap } = props;
  const side = (size / level);
  const x = (position % level) * side;
  const y = Math.floor(position / level) * side;

  const [collectedProps, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item, monitor) => {

      const sourceItem = monitor.getItem();
      console.log('item: ', sourceItem);
      const sourcePosition = sourceItem.position;
      const dropPosition = position;

      onSwap(sourcePosition, position);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }))

  return (
    <div className='piece'>
      <Piece
        ref={drop}
        position={position}
        image={image}
        size={size}
        side={side}
        x={x}
        y={y}
        isOver={isOver}
      />

      <style>{`
        .piece:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Cell
