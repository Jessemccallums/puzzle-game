import NewGame from '../new-game/NewGame';
import Link from 'next/link';

const Winner = ({ numbers, reset, id }) => {
    if (!numbers.every(n => n.value === n.index + 1))
        return null;

    const numericId = parseInt(id, 10); // Convert 'id' to a number
    const nextLevelId = numericId + 1; // Increment 'id' by 1 for the next level

    const saveProgress = () => {
        const progressData = {
            id: 6,
            progress: numbers, // Assuming 'numbers' holds the progress data
            lastSaved: new Date().toISOString()
        };

        localStorage.setItem(`progress_6`, JSON.stringify(progressData));
        console.log('Progress saved to localStorage!');
    };
    
    const styling = {
        position: 'absolute',
        background: '#123355',
        borderRadius: '10px',
        top: '0',
        zIndex: '100',
        left: '0',
        bottom: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    };

    return (
        <div style={styling} >
            <p>You win!</p>
            <h2>Level 6 completed!</h2>
            
            {numericId === 25 ? 'You have completed all levels!' : 
            <Link onClick={saveProgress} href={`/levels/7`}>
                Link to next level
            </Link>
            }
        </div>
    );
};

export default Winner;
