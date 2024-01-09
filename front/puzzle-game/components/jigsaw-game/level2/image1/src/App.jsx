import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Puzzle from './Puzzle';
import styles from './app.module.css';

function App() {
  const puzzlePieces = ['/pieces1/puzzle_piece-1.svg', '/pieces1/puzzle_piece-2.svg', '/pieces1/puzzle_piece-3.svg', '/pieces1/puzzle_piece-4.svg', '/pieces1/puzzle_piece-5.svg', '/pieces1/puzzle_piece-6.svg', '/pieces1/puzzle_piece-7.svg', '/pieces1/puzzle_piece-8.svg', '/pieces1/puzzle_piece-9.svg', '/pieces1/puzzle_piece-10.svg', '/pieces1/puzzle_piece-11.svg', '/pieces1/puzzle_piece-12.svg'];


  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.App}>
        <h1 className={styles.title}>Puzzle Game</h1>
        <Puzzle pieces={puzzlePieces} />
      </div>
    </DndProvider>
  );
}

export default App;