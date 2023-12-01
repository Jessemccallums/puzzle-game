import './App.css';
import Board from './components/board/Board'

const App = ({id}) => {
    return (
        <div className="App">
            <Board id={id} />
        </div>
    );
}

export default App;
