import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

export default function Card({id, level}) {
  return (
    <div className={styles.boxcard}>
        <h2>{id}</h2>        
        <h2>{level}</h2> 
        <Link href={`levels/${id}`}>Join</Link>       
    </div>
  )
}
