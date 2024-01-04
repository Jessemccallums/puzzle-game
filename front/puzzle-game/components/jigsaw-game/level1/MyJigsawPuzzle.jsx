import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import App from './src/App';
import App1 from './image1/src/App';
import App2 from './image2/src/App';

const MyJigsawPuzzle = () => {
  const [image, setImage] = useState(App1);
 
  const handleImage = (picture) => {
    setImage(picture);
  }

  return (
    <div>
      <button onClick={() => handleImage(App)}>0</button>
      <button onClick={() => handleImage(App1)}>1</button>
      <button onClick={() => handleImage(App2)}>2</button>
    {image}
    </div>
  );
};

export default MyJigsawPuzzle;
