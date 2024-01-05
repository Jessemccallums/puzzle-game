import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Puzzle from './Puzzle';
import './App.css';
import picture from './assets/picture.jpg';
import piece1 from './assets/pieces/puzzle_piece-1.svg';
import piece2 from './assets/pieces/puzzle_piece-2.svg';
import piece3 from './assets/pieces/puzzle_piece-3.svg';
import piece4 from './assets/pieces/puzzle_piece-4.svg';
import piece5 from './assets/pieces/puzzle_piece-5.svg';
import piece6 from './assets/pieces/puzzle_piece-6.svg';
import piece7 from './assets/pieces/puzzle_piece-7.svg';
import piece8 from './assets/pieces/puzzle_piece-8.svg';
import piece9 from './assets/pieces/puzzle_piece-9.svg';
import piece10 from './assets/pieces/puzzle_piece-10.svg';
import piece11 from './assets/pieces/puzzle_piece-11.svg';
import piece12 from './assets/pieces/puzzle_piece-12.svg';

function App() {
  const puzzlePieces = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece11, piece12];


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Puzzle Game</h1>
        <Puzzle pieces={puzzlePieces} />
      </div>
    </DndProvider>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleSpot from './PuzzleSpot';

const getRandomPosition = (max) => Math.floor(Math.random() * max);

const Puzzle = ({ pieces }) => {
  const [pieceInSpot, setPieceInSpot] = useState(Array(pieces.length).fill(null));
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const initialPositions = pieces.map(() => ({
      x: getRandomPosition(window.innerWidth - 100), 
      y: getRandomPosition(window.innerHeight - 100)
    }));
    setPositions(initialPositions);
  }, [pieces]);

  const handleDrop = (spotId, pieceId) => {
    setPieceInSpot(prev => prev.map((piece, index) => index === spotId ? pieceId : piece));
  };

  return (
    <div className="puzzle">
      {pieces.map((_, spotId) => (
        <PuzzleSpot
          key={spotId}
          id={spotId}
          onDropPiece={handleDrop}
          pieceId={pieceInSpot[spotId]}
          pieces={pieces}
        />
      ))}
      {pieces.map((imageUrl, pieceId) => (
        <PuzzlePiece
          key={pieceId}
          id={pieceId}
          imageUrl={imageUrl}
          pieceInSpot={pieceInSpot}
          position={positions[pieceId]}
        />
      ))}
    </div>
  );
};

export default Puzzle;



import React from 'react';
import { useDrag } from 'react-dnd';

const PuzzlePiece = ({ id, imageUrl, pieceInSpot, position }) => {
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
    position: 'absolute',
    width: '100px',
    height: '100px',
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: 'grab'
  };

  return (
    <div ref={drag} className={`piece_${id}`} style={pieceStyle} />
  );
};

export default PuzzlePiece;




import React from 'react';
import { useDrop } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';

const PuzzleSpot = ({ id, onDropPiece, pieceId, pieces }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => onDropPiece(id, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const spotStyle = {
    width: '100px',
    height: '100px',
    position: 'relative',
  };

  return (
    <div ref={drop} className="spot" style={spotStyle}>
      {pieceId === id && (
        <PuzzlePiece id={pieceId} imageUrl={pieces[pieceId]} pieceInSpot={[id]} position={{ x: 0, y: 0 }} />
      )}
    </div>
  );
};

export default PuzzleSpot;


.App {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.puzzle {
  display: grid;
  grid-template-columns: repeat(4, 94px);
  margin-top: 20px;
}



.piece_0 {
  width: 100px;
  height: 100px;
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;
}

.piece_1 {
 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  left: -18px;
  opacity: 1;
  width: 145px;
  height: 100px;
  cursor: grab;

  
}

.piece_2 {
  width: 100px;
  height: 100px;
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;
}

.piece_3 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;
  width: 127px;
  height: 100px;
  position: relative;
  left: -19px;
}

.piece_4 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 125px;
  top: -41px;
  position: relative;
  height: 157px;
}

.piece_5 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 105px;
  top: -22px;
  left: 3px;
  position: relative;
  height: 121px;
}

.piece_6 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;


  
  width: 117px;
  position: relative;
  height: 160px;
  top: -31px;
  left: -15px;
}

.piece_7 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 117px;
  left: -14px;
  top: -26px;
  height: 126px;
  position: relative;
}

.piece_8 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 125px;
  top: -25px;
  position: relative;
  height: 125px;
}

.piece_9 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 120px;
  left: -4px;
  top: -23px;
  position: relative;
  height: 121px;
}

.piece_10 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 145px;
  top: -17px;
  left: -18px;
  position: relative;
  height: 126px;
}

.piece_11 {
  background-size: contain; /* Cambia 'cover' por 'contain' */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen de fondo */
  cursor: grab;

  
  width: 111px;
  position: relative;
  top: -26px;
  height: 123px;
}

.spot_0{
  width: 100px;
  height: 100px;
}

.spot_1{
  width: 100px;
  height: 100px;
}

.spot_2{
  width: 100px;
  height: 100px;
}

.spot_3{
  width: 180px;
  height: 145px;
}

.spot_4{
  width: 100px;
  height: 100px;
}

.spot_5{
  width: 100px;
  height: 100px;
}

.spot_6{
  width: 100px;
  height: 100px;
}

.spot_7{
  width: 100px;
  height: 100px;
}

.spot_8{
  width: 100px;
  height: 100px;
}

.spot_9{
  width: 100px;
  height: 100px;
}

.spot_10{
  width: 100px;
  height: 100px;
}

.spot_11{
  width: 100px;
  height: 100px;
}