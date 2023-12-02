import Image from 'next/image'
import styles from './page.module.css'
import Init from '../../components/Home'

export default function Home() {
  return (
    <div className={styles.bghome}>
      <Image src="/ranchbg.svg" alt="bg" layout="fill" objectFit="cover" />
      <Image src="/planehome1.svg" width={200} height={200} alt="bg"  className={styles.plane1}/>
      <Image src="/planehome2.svg" width={200} height={200} alt="bg"  className={styles.plane2}/>
      <Init />
    </div>
  )
}
