import React, { useState, useEffect } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleSpot from './PuzzleSpot';
import styles from './app.module.css';
import Image from 'next/image';

const Puzzle = ({ pieces }) => {
  const [pieceInSpot, setPieceInSpot] = useState(Array(pieces.length).fill(null));
  const [placedPieces, setPlacedPieces] = useState(Array(pieces.length).fill(false));
  const [randomPositions, setRandomPositions] = useState([]);
  const [puzzleComplete, setPuzzleComplete] = useState(false); // Nuevo estado

  useEffect(() => {
    let positions = Array.from({ length: pieces.length }, (_, i) => i);
    positions.sort(() => Math.random() - 0.5);
    setRandomPositions(positions);
  }, [pieces.length]);

  useEffect(() => {
    // Verificar si todas las piezas están colocadas en su lugar correcto
    const isPuzzleComplete = placedPieces.every((placed, index) => placed || index === randomPositions[index]);
    setPuzzleComplete(isPuzzleComplete);
  }, [placedPieces, randomPositions]);

  const handleDrop = (spotId, pieceId) => {
    setPieceInSpot(prev => prev.map((piece, index) => index === spotId ? pieceId : piece));
    setPlacedPieces(prev => prev.map((placed, index) => index === pieceId ? true : placed));
  };

  return (
    <div className={styles.puzzle}>
      {puzzleComplete ? ( // Mostrar la imagen completa si el rompecabezas está completo
        <Image src="/preview/preview9.svg" alt="Puzzle Preview" className={styles.image} width={500} height={500} />
      ) : (
        <>
          {pieces.map((_, spotId) => (
            <PuzzleSpot
              key={spotId}
              id={spotId}
              onDropPiece={handleDrop}
              pieceId={pieceInSpot[spotId]}
              pieces={pieces}
            />
          ))}
          {randomPositions.map((pieceId, index) => (
            !placedPieces[pieceId] && (
              <PuzzlePiece
                key={index}
                id={pieceId}
                imageUrl={pieces[pieceId]}
              />
            )
          ))}
        </>
      )}
    </div>
  );
};

export default Puzzle;
