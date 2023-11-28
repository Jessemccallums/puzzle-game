import Image from 'next/image'
import styles from './page.module.css'
import Init from '../../components/Home'

export default function Home() {
  return (
    <div className={styles.bghome}>
      <Init />
    </div>
  )
}
