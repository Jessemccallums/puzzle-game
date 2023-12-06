import { useEffect, useState } from "react";
import styles from './Board.module.css';
import Tile from "../tile/Tile";
import Overlay from "../overlay/Overlay";
import Winner from "../winner/Winner";

const Board = () => {
    const shuffle = () =>
        new Array(25) // Updated to 25 for a 5x5 grid
            .fill()
            .map((_, i) => i + 1)
            .sort(() => Math.random() - 0.5)
            .map((x, i) => ({ value: x, index: i }));

    const [numbers, setNumbers] = useState([]);
    const [animating, setAnimating] = useState(false);

    const reset = () => setNumbers(shuffle());

    const moveTile = tile => {
        const i25 = numbers.find(n => n.value === 25).index; // Updated to 25
        // Update move logic for 5x5 grid
        if (![i25 - 1, i25 + 1, i25 - 5, i25 + 5].includes(tile.index) || animating)
            return;

        const newNumbers =
            [...numbers]
                .map(number => {
                    if (number.index !== i25 && number.index !== tile.index)
                        return number;
                    else if (number.value === 25) // Updated to 25
                        return { value: 25, index: tile.index };

                    return { value: tile.value, index: i25 };
                });
        setAnimating(true);
        setNumbers(newNumbers);
        setTimeout(() => setAnimating(false), 200);
    };

    const handleKeyDown = e => {
        const i25 = numbers.find(n => n.value === 25).index; // Updated to 25
        // Update key controls for 5x5 grid
        if (e.keyCode === 37 && !(i25 % 5 === 4))
            moveTile(numbers.find(n => n.index === i25 + 1));
        else if (e.keyCode === 38 && !(i25 > 19))
            moveTile(numbers.find(n => n.index === i25 + 5));
        else if (e.keyCode === 39 && !(i25 % 5 === 0))
            moveTile(numbers.find(n => n.index === i25 - 1));
        else if (e.keyCode === 40 && !(i25 < 5))
            moveTile(numbers.find(n => n.index === i25 - 5));
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    useEffect(reset, []);

    return (
        <div className={styles.game}>
            <div className={styles.board}>
                <Overlay size={25} />
                {numbers.map((x, i) => (
                    <Tile key={i} number={x} moveTile={moveTile} />
                ))}
            </div>
            <Winner numbers={numbers} reset={reset} />
        </div>
    );
};

export default Board;
