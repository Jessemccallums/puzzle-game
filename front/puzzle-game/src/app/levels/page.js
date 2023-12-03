import Image from 'next/image';
import styles from './levels.module.css';
import LevelsView from '../../../components/levels-components/LevelsView';

export default function Home() {
  return (
    <div className={styles.bghome}>
      <Image
        src="/LevelPage.svg"
        alt="levels background"
        className={styles.imagebackgound}
        width={500}
        height={200}
      /> 
      <LevelsView />
    </div>
  );
}
