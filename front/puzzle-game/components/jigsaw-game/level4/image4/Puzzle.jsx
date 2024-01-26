import React, { useState, useEffect } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleSpot from './PuzzleSpot';
import styles from './app.module.css';
import Image from 'next/image';

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const Puzzle = ({ pieces }) => {
  const initialPieceLocations = shuffleArray(pieces.map((_, index) => index));
  const [pieceInSpot, setPieceInSpot] = useState(Array(pieces.length).fill(null));
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [randomPositions, setRandomPositions] = useState([]);
  const [placedPieces, setPlacedPieces] = useState(Array(pieces.length).fill(false));

  const handleResetGame = () => {
    setPieceInSpot(Array(pieces.length).fill(null)); // Resetea las posiciones de las piezas
    setPlacedPieces(Array(pieces.length).fill(false)); // Resetea las piezas colocadas
    setPuzzleComplete(false); // Establece que el rompecabezas no está completo
    setRandomPositions(shuffleArray([...Array(pieces.length).keys()])); // Mezcla las piezas nuevamente
  };

  useEffect(() => {
    let positions = Array.from({ length: pieces.length }, (_, i) => i);
    positions.sort(() => Math.random() - 0.5);
    setRandomPositions(positions);
  }, [pieces.length]);

  useEffect(() => {
    const isPuzzleComplete = placedPieces.every((placed, index) => placed || index === randomPositions[index]);
    setPuzzleComplete(isPuzzleComplete);
  }, [placedPieces, randomPositions]);

  useEffect(() => {
    const isPuzzleComplete = pieceInSpot.every((piece, spotId) => piece === spotId);
    setPuzzleComplete(isPuzzleComplete);
  }, [pieceInSpot]);

  const handleDrop = (spotId, pieceId) => {
    // Actualizar el estado para reflejar que la pieza ahora ocupa un nuevo spot
    setPieceInSpot(prev => {
      const newPieceInSpot = [...prev];
      // Buscar y limpiar la posición anterior de la pieza
      const prevSpotIndex = newPieceInSpot.findIndex(p => p === pieceId);
      if (prevSpotIndex !== -1) newPieceInSpot[prevSpotIndex] = null;
      // Asignar la pieza al nuevo spot
      newPieceInSpot[spotId] = pieceId;
      return newPieceInSpot;
    });
  
    // Actualizar el estado para indicar que la pieza ha sido colocada
    setPlacedPieces(prev => prev.map((placed, index) => index === pieceId ? true : placed));
  };
  

 const handlePieceRemoved = (pieceId) => {
  if (!puzzleComplete) {
    setPieceInSpot(prev => {
      const newPieceInSpot = [...prev];
      const spotIndex = newPieceInSpot.findIndex(p => p === pieceId);
      if (spotIndex !== -1) newPieceInSpot[spotIndex] = null;
      return newPieceInSpot;
    });
  }
};


  const handleResetPieces = () => {
    if (!puzzleComplete) { // Solo permite resetear las piezas si el rompecabezas no está completo
      setPieceInSpot(initialPieceLocations.slice()); // Restaura las piezas a sus ubicaciones originales
    }
  };
  const resetbtn = {
    "position": "relative",
    "top": "15px",
    "padding": "10px",
    "backgroundColor": "dimgrey",
  }
  return (
    <>
    <div className={styles.puzzle}>
      {puzzleComplete ? (
        <>
          <Image src="/preview3/preview4-level3.svg"alt="Puzzle Preview" className={styles.image} width={500} height={500} />
          <div className={styles.completeMessage}>¡Puzzle completado!</div>
        </>
      ) : (
        <>
          {pieceInSpot.map((pieceId, spotId) => (
            <PuzzleSpot
              key={spotId}
              id={spotId}
              onDropPiece={handleDrop}
              pieceId={pieceId}
              pieces={pieces}
              onPieceRemoved={handlePieceRemoved}
              puzzleComplete={puzzleComplete}
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
      <button onClick={handleResetGame} style={resetbtn}>Reset puzzle</button>
      </>
  );
};

export default Puzzle;