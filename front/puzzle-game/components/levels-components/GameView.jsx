import React from 'react'
import App1 from '../../components/levels/level1/src/App'
import App2 from '../../components/levels/level2/src/App'
import App3 from '../../components/levels/level3/src/App'
import App4 from '../../components/levels/level4/src/App'
import App5 from '../../components/levels/level5/src/App'
import App6 from '../../components/levels/level6/src/App'
import App7 from '../../components/levels/level7/src/App'
import App8 from '../../components/levels/level8/src/App'
import App9 from '../../components/levels/level9/src/App'
import App10 from '../../components/levels/level10/src/App'
import App11 from '../../components/levels/level11/src/App'
import App12 from '../../components/levels/level12/src/App'
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
      {id == 1 && <App1 id={id} />}
      {id == 2 && <App2 id={id} />}
      {id == 3 && <App3 id={id} />}
      {id == 4 && <App4 id={id} />}
      {id == 5 && <App5 id={id} />}
      {id == 6 && <App6 id={id} />}
      {id == 7 && <App7 id={id} />}
      {id == 8 && <App8 id={id} />}
      {id == 9 && <App9 id={id} />}
      {id == 10 && <App10 id={id} />}
      {id == 11 && <App11 id={id} />}
      {id == 12 && <App12 id={id} />}
    </div>
  )
}
