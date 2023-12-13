import React from 'react'
import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
    const cards = [
        { id: 1, name: 'Level 1', src: '/jigsaw-game/1', description: 'Easy' },
        { id: 2, name: 'Level 2', src: '/jigsaw-game/2', description: 'Medium'},
        { id: 3, name: 'Level 3', src: '/jigsaw-game/3', description: 'Hard'},
        { id: 4, name: 'Level 4', src: '/jigsaw-game/4', description: 'Very Hard'},
      ]
  return (
    <div>
        <h1 className={styles.headline1}>Play a Jigsaw Game</h1>
            <div className={styles.detailbox}>
                {
                    cards.map(card => (
                        <div className={styles.card}>
                            <h1 className={styles.h1}>Level: "{card.name}"</h1>
                            <h2 className={styles.h2}>Difficulty: {card.description}</h2>
                            <Link className={styles.link} href={card.src}>Join</Link>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}
