import { useContext, useState, useEffect } from 'react';
import styles from './GameHeader.module.css';
import { GameContext } from '../../common/gameContext';
const GameHeader = () => {
    const { scores, round } = useContext(GameContext);
    return (
        <div className={styles.resultBoard}>

            <ScoreDisplay participant="User" score={scores.user} />
            <div className={styles.title}>
                <h1 className={styles.gameTitle}>Rock Paper Scissors</h1>
                <h2 className={styles.roundTitle}>Round {round}</h2>
            </div>

            <ScoreDisplay participant="Computer" score={scores.computer} />
        </div>
    )
};

export default GameHeader;

const ScoreDisplay = ({participant, score}) => {

    const [showUpdate, setShowUpdate] = useState(false);
    useEffect(() => {
        setShowUpdate(true);
        setTimeout(() => setShowUpdate(false), 750);
    }, [score]);
    
    return (
        <div className={styles.scoreDisplay}>
            <div>{participant} Score</div>
            <span className={`${styles.score} ${showUpdate ? styles.updateScore : ''}`}>{showUpdate ? '+1' : score}</span>
        </div>
    )
}