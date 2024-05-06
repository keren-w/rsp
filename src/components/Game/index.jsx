import { useState, useContext } from 'react';
import { chooseRandomTool, getResults } from './utils';
import SelectTool from '../SelectTool';
import styles from './Game.module.css';
import { GameContext } from '../../common/gameContext';

const Game = () => {
    const [userSelection, setUserSelection] = useState(null);
    const [computerSelection, setComputerSelection] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [winner, setWinner] = useState(null);
    const { updateScores, round, setRound } = useContext(GameContext);

    const onUserSelection = (userSelection = null) => {
        setUserSelection(userSelection);
        setComputerSelection(null);
        const computerChoice = chooseRandomTool();
        setIsProcessing(true);

        if (userSelection) {
            setTimeout(() => {
                setComputerSelection(computerChoice);
                const winner = getResults(userSelection, computerChoice);
                updateScores(winner);
                setWinner(winner);
                setRound(round => round + 1);
                setIsProcessing(false);
            }, 1000);
        }
    }

    return (
        <div className={styles.gameWrapper}>

            <div>{isProcessing ? 'calculating...' : 'Please select:'}</div>

            <div className={styles.playBoard}>
                <SelectTool userSelection={isProcessing ? userSelection : null}
                    setUserSelection={onUserSelection}
                    disabled={isProcessing} />
            </div>

            <div>
                {userSelection && <div>You chose: {userSelection}</div>}
                {computerSelection && <div>Computer chose: {computerSelection}</div>}
            </div>

            {!isProcessing && round > 1 &&
                <div className={styles.result}>
                    {winner === 'tie' ?
                        'its a tie' :
                        <>Winner is <span>{winner?.toUpperCase()}</span></>
                    }
                </div>}
        </div>
    )

};

export default Game;