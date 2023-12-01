import React from 'react'
import Link from 'next/link'
import styles from './home.module.css'

export default function Init() {
  return (
    <div className={styles.home}>
        <h1 className={styles.hometitle}>
            PUZZLE GAME
        </h1>
        <p className={styles.p}>
        Welcome to Puzzle Planet – where fun and learning collide! Join us on an exciting adventure filled with colorful challenges designed just for you. Explore vibrant worlds, solve mind-bending puzzles, and unlock your imagination! Get ready to embark on an epic journey that will spark your curiosity and sharpen your problem-solving skills. Are you ready to dive into the ultimate puzzle-packed universe? Let's begin the adventure together!
        </p>
        <Link href="/levels" className={styles.link}>
          Join
        </Link>
    </div>
  )
}
