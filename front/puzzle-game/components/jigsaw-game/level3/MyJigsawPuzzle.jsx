import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import App1 from './image1/App';
import App2 from './image2/App';
import App3 from './image3/App';
import App4 from './image4/App';
import App5 from './image5/App';
import App6 from './image6/App';
import App7 from './image7/App';
import App8 from './image8/App';
import App9 from './image9/App';
import App10 from './image10/App';
import styles from './levelone.module.css'

const MyJigsawPuzzle = () => {
  const [image, setImage] = useState(App1);
 
  const handleImage = (picture) => {
    setImage(picture);
  }

  return (
    <div>
      <div className={styles.pictures}>  
        <button className={styles.btn1_level2} onClick={() => handleImage(App1)}>1</button>
        <button className={styles.btn2_level2} onClick={() => handleImage(App2)}>2</button>
        <button className={styles.btn3_level2} onClick={() => handleImage(App3)}>3</button>
        <button className={styles.btn4_level2} onClick={() => handleImage(App4)}>4</button>
        <button className={styles.btn5_level2} onClick={() => handleImage(App5)}>5</button>
        <button className={styles.btn6_level2} onClick={() => handleImage(App6)}>6</button>
        <button className={styles.btn7_level2} onClick={() => handleImage(App7)}>7</button>
        <button className={styles.btn8_level2} onClick={() => handleImage(App8)}>8</button>
        <button className={styles.btn9_level2} onClick={() => handleImage(App9)}>9</button>
        <button className={styles.btn10_level2} onClick={() => handleImage(App10)}>10</button>
      </div>
    {image}
    </div>
  );
};

export default MyJigsawPuzzle;
