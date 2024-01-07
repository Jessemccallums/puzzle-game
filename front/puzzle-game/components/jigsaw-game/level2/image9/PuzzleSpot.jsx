import React from 'react';
import { useDrop } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';
import styles from './app.module.css';

const PuzzleSpot = ({ id, onDropPiece, pieceId, pieces }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      if (item.id === id) {
        onDropPiece(id, item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => item.id === id,
  }));

  const spotStyle = {
    width: '100px',
    height: '100px',
  };

  const spotClassName = `spot_${id}`;

  return (
    <div ref={drop} className={styles[spotClassName]} style={spotStyle}>
      {pieceId !== null && <PuzzlePiece id={pieceId} imageUrl={pieces[pieceId]} />}
    </div>
  );
};

export default PuzzleSpot;
