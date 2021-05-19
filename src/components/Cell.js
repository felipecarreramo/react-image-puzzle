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

      console.log('item: ', item);
      console.log('monitor: ', monitor);

      const sourcePosition = item.position;
      const dropPosition = monitor.position;

      onSwap(sourcePosition, dropPosition);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }))

  return (
    <div ref={drop} className='piece'>
      <Piece
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
