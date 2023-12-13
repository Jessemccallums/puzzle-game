import React from 'react'
import Home from '../../../components/jigsaw-game/jigsaw-view/Home'
import styles from './page.module.css'
import Image from 'next/image'

export default function Page() {
  return (
    <div> 
       <Image src="/ranchbg.svg" className={styles.homepage} alt="bg" layout="fill" objectFit="cover" /> 
      <Home />
    </div>
  )
}
