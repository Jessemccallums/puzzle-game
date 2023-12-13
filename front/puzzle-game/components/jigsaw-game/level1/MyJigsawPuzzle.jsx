'use client'
import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Image from 'next/image';

const MyJigsawPuzzle = () => {
  const [completedImage, setCompletedImage] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [timer, setTimer] = useState(0);

  const handleChoose = (number) => {
    setCurrentLevel(number);
  };

  const handleSolved = () => {
    setCompletedImage(currentLevel);
    localStorage.setItem('puzzleProgress', JSON.stringify({ completedImage, currentLevel, timer }));
    alert('Puzzle Solved!');
  };

  const handleReset = () => {
    localStorage.removeItem('puzzleProgress');
    setCompletedImage(null);
    setCurrentLevel(1);
    setTimer(0);
  };

  const getImageSrc = () => {
    return `/level-1-pictures/${currentLevel}.svg`;
  };

  useEffect(() => {
    // Restore progress from local storage when the component mounts
    const savedProgress = localStorage.getItem('puzzleProgress');

    if (savedProgress) {
      const { completedImage: savedCompletedImage, currentLevel: savedCurrentLevel, timer: savedTimer } = JSON.parse(savedProgress);
      setCompletedImage(savedCompletedImage);
      setCurrentLevel(savedCurrentLevel);
      setTimer(savedTimer);
    }

    // Start the timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Render buttons to choose the image */}
      {Array.from({ length: 15 }, (_, index) => (
        <button key={index} onClick={() => handleChoose(index + 1)}>
          <Image
            src={`/level-1-pictures/${index + 1}.svg`}
            width={200}
            height={200}
          />
        </button>
      ))}

      <h1>Jigsaw Puzzle Example</h1>
      {completedImage && <div>Completed Picture: {completedImage}</div>}
      <div>Current Level: {currentLevel}</div>
      <div>Timer: {timer} seconds</div>
      <button onClick={handleReset}>Reset Progress</button>
      <JigsawPuzzle
        imageSrc={getImageSrc()}
        rows={3}
        columns={3}
        onSolved={handleSolved}
      />
    </div>
  );
};

export default MyJigsawPuzzle;
