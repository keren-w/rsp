import styles from './GameHeader.module.css';
const GameHeader = ({computerScore, userScore}) => {
    return <div className={styles.resultBoard}>

<div className={styles.scoreDisplay}>
    <div>User Score</div>
<span className={styles.score}>{userScore}</span>
</div>
<div className={styles.gameTitle}>Rock Paper Scissors</div>
<div className={styles.scoreDisplay}>
    <div>Computer Score</div>
<span className={styles.score}>{computerScore}</span>
</div>

        
    </div>
};

export default GameHeader;