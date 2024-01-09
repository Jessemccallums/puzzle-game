import React from 'react';
import { useDrop } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';
import styles from './app.module.css';


const PuzzleSpot = ({ id, onDropPiece, pieceId, pieces }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      if (item.id === id) { // Solo permite soltar la pieza si coincide con el id del spot
        onDropPiece(id, item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => item.id === id, // Solo permite arrastrar sobre el spot si la pieza es la correcta
  }));

  const spotStyle = {
    width: '100px',
    height: '100px',
    // ...otros estilos
  };
  const spotClassName = `spot_${id}`;
  return (
    <div ref={drop} className={styles[spotClassName]} style={spotStyle}>
      {pieceId !== null && <PuzzlePiece id={pieceId} imageUrl={pieces[pieceId]} />}
    </div>
  );
};

export default PuzzleSpot;
