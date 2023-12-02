import React from 'react'
import App from '../../components/appcomponents/src/App'
import Link from 'next/link'
import Card from './cards/Card'
import styles from './levels.module.css'

export default function LevelsView() {
    const cards = [
        { id: 1, name: 'level 1', src: '/images/level1.png' },
        { id: 2, name: 'level 2', src: '/images/level2.png' },
        { id: 3, name: 'level 3', src: '/images/level3.png' },
        { id: 4, name: 'level 4', src: '/images/level4.png' },
        { id: 5, name: 'level 5', src: '/images/level5.png' },
        { id: 6, name: 'level 6', src: '/images/level6.png' },
        { id: 7, name: 'level 7', src: '/images/level7.png' },
        { id: 8, name: 'level 8', src: '/images/level8.png' },
        { id: 9, name: 'level 9', src: '/images/level9.png' },
        { id: 10, name: 'level 10', src: '/images/level10.png' },
        { id: 11, name: 'level 11', src: '/images/level11.png' },
        { id: 12, name: 'level 12', src: '/images/level12.png' },
        { id: 13, name: 'level 13', src: '/images/level13.png' },
        { id: 14, name: 'level 14', src: '/images/level14.png' },
        { id: 15, name: 'level 15', src: '/images/level15.png' },
        { id: 16, name: 'level 16', src: '/images/level16.png' },
        { id: 17, name: 'level 17', src: '/images/level17.png' },
        { id: 18, name: 'level 18', src: '/images/level18.png' },
        { id: 19, name: 'level 19', src: '/images/level19.png' },
        { id: 20, name: 'level 20', src: '/images/level20.png' },
        { id: 21, name: 'level 21', src: '/images/level20.png' },
        { id: 22, name: 'level 22', src: '/images/level20.png' },
        { id: 23, name: 'level 23', src: '/images/level20.png' },
        { id: 24, name: 'level 24', src: '/images/level20.png' },
        { id: 25, name: 'level 25', src: '/images/level20.png' },
      ]
  return (
    <div className={styles.cardcontainer}>
        <h1 className={styles.welcome}>Play a puzzle game!</h1>
        {
            cards.map(card => (
                <Card id={card.id} level={card.name}  />
            ))
        }
    </div>
  )
}
