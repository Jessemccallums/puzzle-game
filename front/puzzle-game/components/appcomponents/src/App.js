import './App.css';
import Board from './components/board/Board'
import Image from 'next/image';

const App = ({id}) => {
    return (
        <div className="App">
            <Image src="/bglevel.svg" alt="logo" className='bg' width={200} height={200} />
            <Board id={id} />
        </div>
    );
}

export default App;
