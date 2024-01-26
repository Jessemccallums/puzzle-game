import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';
import styles from './app.module.css';

const PuzzleSpot = ({ id, onDropPiece, pieceId, pieces, puzzleComplete }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      if (!puzzleComplete) {
        onDropPiece(id, item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const spotStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: isOver ? 'lightblue' : 'transparent',
  };

  return (
    <div ref={drop} className={styles[`spot_${id}`]} style={spotStyle}>
      {pieceId !== null && (
        <PuzzlePiece
          id={pieceId}
          imageUrl={pieces[pieceId]}
          draggable={!puzzleComplete} 
          onRemovePiece={() => setOccupied(false)}// Deshabilita el arrastre si está ocupado o el rompecabezas está completo
        
        />
      )}
    </div>
  );
};

export default PuzzleSpot;