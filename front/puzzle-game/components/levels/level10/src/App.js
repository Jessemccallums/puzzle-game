import styles from './App.module.css';
import Board from './components/board/Board'
import Image from 'next/image';

const App10 = ({id}) => {
    return (
        <div className={styles.App}>
            <Image src="/GamePage3.svg" alt="logo" className={styles.bg} layout="fill" objectFit="cover" />
            <Board id={id} />
        </div>
    );
}

export default App10;
