'use client';

import { useEffect, useState } from "react";
import styles from './Board.module.css';
import Tile from "../tile/Tile";
import Overlay from "../overlay/Overlay";
import Winner from "../winner/Winner";

const Board = ({ id }) => {
    const shuffle = () =>
        new Array(9)
            .fill()
            .map((_, i) => i + 1)
            .sort(() => Math.random() - 0.5)
            .map((x, i) => ({ value: x, index: i }))

    const [numbers, setNumbers] = useState([])
    const [animating, setAnimating] = useState(false)

    const reset = () => setNumbers(shuffle())

    const moveTile = tile => {
        const i9 = numbers.find(n => n.value === 9).index
        if (![i9 - 1, i9 + 1, i9 - 3, i9 + 3].includes(tile.index) || animating)
            return

        const newNumbers =
            [...numbers]
                .map(number => {
                    if (number.index !== i9 && number.index !== tile.index)
                        return number
                    else if (number.value === 9)
                        return { value: 9, index: tile.index }

                    return { value: tile.value, index: i9 }
                })
        setAnimating(true)
        setNumbers(newNumbers)
        setTimeout(() => setAnimating(false), 200)
    }

    const handleKeyDown = e => {
        const i9 = numbers.find(n => n.value === 9).index
        if (e.keyCode === 37 && !(i9 % 3 === 2))
            moveTile(numbers.find(n => n.index === i9 + 1))
        else if (e.keyCode === 38 && !(i9 > 5))
            moveTile(numbers.find(n => n.index === i9 + 3))
        else if (e.keyCode === 39 && !(i9 % 3 === 0))
            moveTile(numbers.find(n => n.index === i9 - 1))
        else if (e.keyCode === 40 && !(i9 < 3))
            moveTile(numbers.find(n => n.index === i9 - 3))
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => { document.removeEventListener('keydown', handleKeyDown) }
    })

    useEffect(reset, [])

    return (
        <div className={styles.game}>
            <div className={styles.board}>
                <Overlay size={9} />
                {numbers.map((x, i) => {
                    return <Tile key={i} number={x} moveTile={moveTile} />
                })}
            </div>
            <Winner id={id} numbers={numbers} reset={reset} />
        </div>
    );
};

export default Board;
