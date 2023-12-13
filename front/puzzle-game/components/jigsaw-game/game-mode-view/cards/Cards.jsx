import React from 'react'
import Link from 'next/link'
import styles from './cards.module.css'

export default function Cards() {
    const cards = [
        { id: 1, name: 'Number Puzzle Game', src: '/levels' },
        { id: 2, name: 'Jigsaw Game', src: '/jigsaw-game'},
      ]
  return (
    <div className={styles.card1}>
        {
            cards.map(card => (
                <div className={styles.card2}>
                    <h3 className={styles.h3}>{card.id}</h3>
                    <h1 className={styles.h1}>Game mode: "{card.name}"</h1>
                    <Link className={styles.link} href={card.src}>Join</Link>
                </div>
            ))
        }
    </div>
  )
}
