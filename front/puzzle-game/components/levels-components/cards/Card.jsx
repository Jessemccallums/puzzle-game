'use client'
import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import Link from 'next/link';

export default function Card({ id, level }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const progressDataString = localStorage.getItem(`progress_${id}`);

    if (progressDataString) {
      try {
        const progressData = JSON.parse(progressDataString);
        console.log('Retrieved progress data:', progressData);

        setCompleted(true);
        console.log('ID:', storedId);
        console.log('Progress:', progress);

        // Perform actions with the retrieved data as needed
        // For example, using 'storedId' and 'progress' in your application logic
      } catch (error) {
        console.error('Error parsing progress data:', error);
      }
    } else {
      console.log(`No progress data found in localStorage for id ${id}`);
    }
  }, [id]);

  return (
    <div className={styles.boxcard}>
      <h2>{id}</h2>
      <h2>{level}</h2>
      <Link href={`levels/${id}`} className={styles.joinbtn}>
        Join
      </Link>
      {completed && <h2>Completed</h2>}
    </div>
  );
}
