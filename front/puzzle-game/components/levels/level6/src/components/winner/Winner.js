import NewGame from '../new-game/NewGame';
import './Winner.css';
import Link from 'next/link';

const Winner = ({ numbers, reset, id }) => {
    if (!numbers.every(n => n.value === n.index + 1))
        return null;

    const numericId = parseInt(id, 10); // Convert 'id' to a number
    const nextLevelId = numericId + 1; // Increment 'id' by 1 for the next level

    const saveProgress = () => {
        const progressData = {
            id: id,
            progress: numbers, // Assuming 'numbers' holds the progress data
            lastSaved: new Date().toISOString()
        };

        localStorage.setItem(`progress_${id}`, JSON.stringify(progressData));
        console.log('Progress saved to localStorage!');
    };


    return (
        <div className="winner">
            <p>You win!</p>
            <h2>Level {numericId} completed!</h2>
            
            {numericId === 25 ? 'You have completed all levels!' : 
            <button onClick={saveProgress}>
            Save Progress
            <br />
            <Link href={`/levels/${nextLevelId}`}>
                Link to next level
            </Link>
            </button>
            }
        </div>
    );
};

export default Winner;
