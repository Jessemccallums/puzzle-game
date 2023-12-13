import React, { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Image from 'next/image';
import styles from './levelone.module.css';

const MyJigsawPuzzle3 = () => {
  const [completedImage, setCompletedImage] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [timer, setTimer] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChoose = (number) => {
    setCurrentLevel(number);
    setSelectedImage(`/level-1-pictures/${number}.svg`); // Update selected image URL
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
    setSelectedImage(null); // Reset selected image URL
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
      <h1 className={styles.titles}>Jigsaw Puzzle</h1>
      {completedImage && <div className={styles.titles}>Completed Picture: {completedImage}</div>}
      <div className={styles.titles}>Current Level: {currentLevel}</div>
      <div className={styles.titles}>Timer: {timer} seconds</div>
      <div className={styles.btnreset}>
          <button className={styles.progressbtn} onClick={handleReset}>Reset Progress</button>
      </div>
      <div className={styles.puzzlegame}>
        <JigsawPuzzle
          imageSrc={getImageSrc()}
          rows={5}
          columns={5}
          onSolved={handleSolved}
        />
      </div>
      <div className={styles.btns}>
        {Array.from({ length: 15 }, (_, index) => (
          <button
            className={styles.btnsimgs}
            key={index}
            onClick={() => handleChoose(index + 1)}
            style={{
              backgroundImage: `url(${`/level-1-pictures/${index + 1}.svg`})`,
            }}
          >
            <Image
              src={`/level-1-pictures/${index + 1}.svg`}
              width={200}
              height={200}
              className={styles.imgbtns}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyJigsawPuzzle3;
