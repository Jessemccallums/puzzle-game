
import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './app.module.css';


const PuzzlePiece = ({ id, imageUrl }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const pieceStyle = {
    backgroundImage: `url(${imageUrl})`,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab'
  };
  const pieceClassName = `piece_${id}`;
  return (
    <div ref={drag} className={styles[pieceClassName]} style={pieceStyle} />
  );
};

export default PuzzlePiece;

