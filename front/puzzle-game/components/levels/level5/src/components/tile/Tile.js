import styles from './Tile.module.css';

const Tile = ({number, moveTile}) => {
    // Determine additional class names based on conditions
    const correctClass = number.value === number.index + 1 ? styles.correct : '';
    const disabledClass = number.value === 9 ? styles.disabled : '';
    const slotClass = `slot--${number.index}`;

    // Combine all class names
    const tileClasses = `${styles.number} ${correctClass} ${disabledClass} ${styles[slotClass]}`;

    return (
        <div 
            onClick={() => moveTile(number)} 
            className={tileClasses}>
            {number.value === 9 ? '' : number.value}
        </div>
    );
};

export default Tile;
