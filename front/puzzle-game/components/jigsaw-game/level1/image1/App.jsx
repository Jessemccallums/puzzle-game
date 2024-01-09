import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Puzzle from './Puzzle';
import styles from './app.module.css';

function App() {
  const puzzlePieces = [
    '/easy-level/pieces1/puzzle_piece-1.svg',
    '/easy-level/pieces1/puzzle_piece-2.svg',
    '/easy-level/pieces1/puzzle_piece-3.svg',
    '/easy-level/pieces1/puzzle_piece-4.svg',
    '/easy-level/pieces1/puzzle_piece-5.svg',
    '/easy-level/pieces1/puzzle_piece-6.svg',
  ];

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
