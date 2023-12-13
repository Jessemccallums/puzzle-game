import React from 'react'
import Link from 'next/link'
import styles from './home.module.css'
import Image from 'next/image'
import Cards from './cards/Cards'

export default function Home() {
  return (
    <div className={styles.home}>
        <h1 className={styles.headline}>Play a Puzzle Game</h1>
        <Image  src="/level-1-pictures/jigsawbg.svg" className={styles.bg} layout="fill" objectFit="cover" />
        <Image  src="/skybg.svg" className={styles.bg1} layout="fill" objectFit="cover" />
        <Cards />
    </div>
  )
}
