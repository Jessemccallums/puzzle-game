import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import App from './src/App';
import App1 from './image1/src/App';
import App2 from './image2/src/App';
import App3 from './image3/src/App';
import App4 from './image4/src/App';
import App5 from './image5/src/App';
import App6 from './image6/src/App';
import App7 from './image7/src/App';
import App8 from './image8/src/App';
import App9 from './image9/src/App';
import styles from './levelone.module.css'

const MyJigsawPuzzle = () => {
  const [image, setImage] = useState(App1);
 
  const handleImage = (picture) => {
    setImage(picture);
  }

  return (
    <div>
      <div className={styles.pictures}>  
        <button className={styles.btn1} onClick={() => handleImage(App)}>1</button>
        <button className={styles.btn2} onClick={() => handleImage(App1)}>2</button>
        <button className={styles.btn3} onClick={() => handleImage(App2)}>3</button>
        <button className={styles.btn4} onClick={() => handleImage(App3)}>4</button>
        <button className={styles.btn5} onClick={() => handleImage(App4)}>5</button>
        <button className={styles.btn6} onClick={() => handleImage(App5)}>6</button>
        <button className={styles.btn7} onClick={() => handleImage(App6)}>7</button>
        <button className={styles.btn8} onClick={() => handleImage(App7)}>8</button>
        <button className={styles.btn9} onClick={() => handleImage(App8)}>9</button>
        <button className={styles.btn10} onClick={() => handleImage(App9)}>10</button>
      </div>
    {image}
    </div>
  );
};

export default MyJigsawPuzzle;
