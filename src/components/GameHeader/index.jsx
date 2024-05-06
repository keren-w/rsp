import { useContext } from 'react';
import styles from './GameHeader.module.css';
import { GameContext } from '../../common/gameContext';
const GameHeader = () => {
    const { scores, round } = useContext(GameContext);
    return (
        <div className={styles.resultBoard}>
            <div className={styles.scoreDisplay}>
                <div>User Score</div>
                <span className={styles.score}>{scores.user}</span>
            </div>

            <div className={styles.title}>
                <h1 className={styles.gameTitle}>Rock Paper Scissors</h1>
                <h2 className={styles.roundTitle}>Round {round}</h2>
            </div>

            <div className={styles.scoreDisplay}>
                <div>Computer Score</div>
                <span className={styles.score}>{scores.computer}</span>
            </div>
        </div>
    )
};

export default GameHeader;