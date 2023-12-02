import Image from 'next/image';
import styles from './levels.module.css';
import LevelsView from '../../../components/levels-components/LevelsView';

export default function Home() {
  return (
    <div className={styles.bghome}>
      <Image
        src="/pattern.svg"
        alt="levels background"
        className={styles.imagebackgound}
        width={500}
        height={200}
      /> 
      <Image
        src="/planeright.svg"
        alt="levels background"
        className={styles.imagebackgound1}
        width={500}
        height={200}
      /> 
      <Image
        src="/planeleft.svg"
        alt="levels background"
        className={styles.imagebackgound2}
        width={500}
        height={200}
      /> 
      <LevelsView />
    </div>
  );
}
