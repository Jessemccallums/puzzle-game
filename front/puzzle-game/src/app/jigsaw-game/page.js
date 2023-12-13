import React from 'react'
import Home from '../../../components/jigsaw-game/jigsaw-view/Home'
import styles from './page.module.css'
import Image from 'next/image'
import { IoMdReturnLeft } from 'react-icons/io'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className={styles.icon}>
        <Link href="/gamemode">
          <IoMdReturnLeft  className={styles.linkback} /> 
        </Link>  
      </div>
       <Image src="/level-1-pictures/17.svg" className={styles.homepage} alt="bg" layout="fill" objectFit="cover" /> 
      {/* // 6, 8, 9, 16 */}
      <Home />
    </div>
  )
}
