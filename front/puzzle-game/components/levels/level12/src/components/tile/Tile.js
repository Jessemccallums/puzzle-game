import styles from './Tile.module.css';

const Tile = ({ number, moveTile }) => (
    <div
        onClick={() => moveTile(number)}
        className={`${styles.number} ${number.value === number.index + 1 ? styles.correct : ''} ${number.value === 25 ? styles.disabled : ''} ${styles['slot--' + number.index]}`}>
        {number.value === 25 ? '' : number.value}
    </div>
);

export default Tile;
