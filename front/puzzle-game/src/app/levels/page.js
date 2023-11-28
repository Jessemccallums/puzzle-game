import Image from 'next/image'
import styles from './levels.module.css'
import LevelsView from '../../../components/levels-components/LevelsView'

export default function Home() {
  return (
    <div className={styles.bghome}>
      <h1 className={styles.title}>Levels</h1>
      <LevelsView />
    </div>
  )
}
