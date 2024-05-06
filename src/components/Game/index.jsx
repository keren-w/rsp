import { useState } from 'react';
import { chooseRandomTool, getResults } from './utils';
import SelectTool from '../SelectTool';
import styles from './Game.module.css';

const Game = ({ onPlay }) => {
    const [userSelection, setUserSelection] = useState(null);
    const [computerSelection, setComputerSelection] = useState(null);
    const [showProcessing, setShowProcessing] = useState(false);
    const [winner, setWinner] = useState(null);
    const [round, setRound] = useState(1);

    const onUserSelection = (userSelection = null) => {
        setUserSelection(userSelection);
        setComputerSelection(null);
        const computerChoice = chooseRandomTool();
        setShowProcessing(true);

        if (userSelection) {
            setTimeout(() => {
                setComputerSelection(computerChoice);
                const winner = getResults(userSelection, computerChoice);
                onPlay(winner);
                setWinner(winner);
                setRound(round => round + 1);
                setShowProcessing(false);
            }, 1000);
        }
    }

    return (
        <div className={styles.gameWrapper}>
            <header className={styles.roundTitle}>Round {round}</header>
            {showProcessing ? <div>calculating...</div> : <div>Please select:</div>}
            <div className={styles.playBoard}>
                <SelectTool userSelection={userSelection} setUserSelection={onUserSelection} disabled={showProcessing} />
            </div>
            {userSelection && <div>You chose: {userSelection}</div>}
            {computerSelection && <div>Computer chose: {computerSelection}</div>}

            {!showProcessing && round > 1 && 
                <div className={styles.gameStatus}>
                    <div className={styles.result}>
                        {winner === 'tie' ?
                            'its a tie' :
                            <>Winner is <span>{winner.toUpperCase()}</span></>
                        }
                    </div>
                </div>}
        </div>
    )

};

export default Game;