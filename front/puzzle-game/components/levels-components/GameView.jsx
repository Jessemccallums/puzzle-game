import React from 'react'
import App from '../../components/appcomponents/src/App'
import { useState, useEffect } from 'react';

export default function GameView({id}) {
  const [completed, setCompleted] = useState(false);
  const storedData = localStorage.getItem(`progress_${id}`);
  console.log('este es la data completada ', storedData);
  useEffect(() => {
    // Accessing the data from localStorage based on the provided id

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Comparing the id from localStorage with the id from the URL parameters
      if (parsedData.id === parseInt(id, 10)) {
        // If the ids match, create a reminder that the level is completed
        console.log(`Level ${id} is completed!`);
        setCompleted(true);
        // You can create a notification, alert, or any desired reminder here
      }
    }
  }, [id]);
  return (
    <div>
        <App id={id} />
    </div>
  )
}
