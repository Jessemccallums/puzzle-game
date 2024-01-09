import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Puzzle from './Puzzle';
import styles from './app.module.css';

function App() {
  const puzzlePieces = [
    '/level3/pieces4/puzzle_piece-1.svg',
    '/level3/pieces4/puzzle_piece-2.svg',
    '/level3/pieces4/puzzle_piece-3.svg',
    '/level3/pieces4/puzzle_piece-4.svg',
    '/level3/pieces4/puzzle_piece-5.svg',
    '/level3/pieces4/puzzle_piece-6.svg',
    '/level3/pieces4/puzzle_piece-7.svg',
    '/level3/pieces4/puzzle_piece-8.svg',
    '/level3/pieces4/puzzle_piece-9.svg',
    '/level3/pieces4/puzzle_piece-10.svg',
    '/level3/pieces4/puzzle_piece-11.svg',
    '/level3/pieces4/puzzle_piece-12.svg',
    '/level3/pieces4/puzzle_piece-13.svg',
    '/level3/pieces4/puzzle_piece-14.svg',
    '/level3/pieces4/puzzle_piece-15.svg',
    '/level3/pieces4/puzzle_piece-16.svg',
    '/level3/pieces4/puzzle_piece-17.svg',
    '/level3/pieces4/puzzle_piece-18.svg',
    '/level3/pieces4/puzzle_piece-19.svg',
    '/level3/pieces4/puzzle_piece-20.svg',
    '/level3/pieces4/puzzle_piece-21.svg',
    '/level3/pieces4/puzzle_piece-22.svg',
    '/level3/pieces4/puzzle_piece-23.svg',
    '/level3/pieces4/puzzle_piece-24.svg',
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
