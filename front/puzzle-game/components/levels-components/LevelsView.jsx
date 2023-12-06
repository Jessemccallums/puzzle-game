import React from 'react'
import Link from 'next/link'
import Card from './cards/Card'
import styles from './levels.module.css'

export default function LevelsView() {
    const cards = [
        { id: 1, name: 'Level 1', src: '/images/level1.png' },
        { id: 2, name: 'Level 2', src: '/images/level2.png' },
        { id: 3, name: 'Level 3', src: '/images/level3.png' },
        { id: 4, name: 'Level 4', src: '/images/level4.png' },
        { id: 5, name: 'Level 5', src: '/images/level5.png' },
        { id: 6, name: 'Level 6', src: '/images/level6.png' },
        { id: 7, name: 'Level 7', src: '/images/level7.png' },
        { id: 8, name: 'Level 8', src: '/images/level8.png' },
        { id: 9, name: 'Level 9', src: '/images/level9.png' },
        { id: 10, name: 'Level 10', src: '/images/level10.png' },
        { id: 11, name: 'Level 11', src: '/images/level11.png' },
        { id: 12, name: 'Level 12', src: '/images/level12.png' },
      ]
  return (
    <div className={styles.cardcontainer}>
        <h1 className={styles.welcome}>Play a puzzle game!</h1>
        <h2 className={styles.welcome1}>Arrange the numbers in ascending order to advance to next level</h2>
        {
            cards.map(card => (
                <Card id={card.id} level={card.name}  />
            ))
        }
    </div>
  )
}
