
import Image from 'next/image';
import styles from './levels.module.css';
import Detail from '../../../../components/detail-in-game/Detail'

export default function Home() {
  
  

  return (
    <div className={styles.bghomedetail}>
      <Detail />
    </div>
  );
}