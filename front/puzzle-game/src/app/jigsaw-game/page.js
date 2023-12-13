import React from 'react'
import Home from '../../../components/jigsaw-game/jigsaw-view/Home'
import styles from './page.module.css'
import Image from 'next/image'

export default function Page() {
  return (
    <div> 
       <Image src="/level-1-pictures/17.svg" className={styles.homepage} alt="bg" layout="fill" objectFit="cover" /> 
      {/* // 6, 8, 9, 16 */}
      <Home />
    </div>
  )
}
