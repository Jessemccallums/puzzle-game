import Image from 'next/image'
import styles from './levels.module.css'
import GameView from '../../../../components/levels-components/GameView'

export default function Home() {
  return (
    <div className={styles.bghome}>
      <GameView />
    </div>
  )
}
