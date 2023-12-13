import React from 'react'
import Link from 'next/link'
import styles from './home.module.css'
import Image from 'next/image'

export default function Init() {
  return (
    <div className={styles.home}>
      {/* <Image 
      src="/welcomeimage.svg" 
      alt="welcome" 
      width={200} 
      height={200} 
      className={styles.image}
      /> */}
      <h1 className={styles.welcoming}>
        Puzzle <br />
        Game
      </h1>
        
        <Link href="/gamemode" className={styles.link}>
          Start
        </Link>
    </div>
  )
}
