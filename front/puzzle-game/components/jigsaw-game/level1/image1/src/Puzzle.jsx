import React, { useState, useEffect } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleSpot from './PuzzleSpot';
import styles from './app.module.css';


const Puzzle = ({ pieces }) => {
  const [pieceInSpot, setPieceInSpot] = useState(Array(pieces.length).fill(null));
  const [placedPieces, setPlacedPieces] = useState(Array(pieces.length).fill(false));
  const [randomPositions, setRandomPositions] = useState([]);

  useEffect(() => {
    let positions = Array.from({ length: pieces.length }, (_, i) => i);
    positions.sort(() => Math.random() - 0.5);
    setRandomPositions(positions);
  }, [pieces.length]);

  const handleDrop = (spotId, pieceId) => {
    setPieceInSpot(prev => prev.map((piece, index) => index === spotId ? pieceId : piece));
    setPlacedPieces(prev => prev.map((placed, index) => index === pieceId ? true : placed));
  };

  return (
    <div className={styles.puzzle}>
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
    </div>
  );
};

export default Puzzle;
