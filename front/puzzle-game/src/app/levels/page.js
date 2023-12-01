import Image from 'next/image'
import styles from './levels.module.css'
import LevelsView from '../../../components/levels-components/LevelsView'

export default function Home() {
  return (
    <div className={styles.bghome}>
      <head>
        <title>Puzzle Game</title>
      </head>
      <Image src="/backgroundlevels.svg" alt="levels background" className={styles.imagebackgound} width={200} height={200} />
      <LevelsView />
    </div>
  )
}
