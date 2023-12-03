import './App.css';
import Board from './components/board/Board'
import Image from 'next/image';

const App = ({id}) => {
    return (
        <div className="App">
            <Image src="/GamePage3.svg" alt="logo" className='bg' layout="fill" objectFit="cover" />
            <Board id={id} />
        </div>
    );
}

export default App;
