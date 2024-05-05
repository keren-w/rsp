import { useState } from 'react'; 
import {chooseRandomTool, getResults} from './utils';
import SelectTool from '../SelectTool';

const Game = ({onPlay}) => {
    const [userSelection, setUserSelection] = useState(null);

    const [computerChoice, setComputerChoice] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onUserSelection = (userSelection = null) => {

        const userChoice = userSelection || chooseRandomTool();
        const computerChoice = chooseRandomTool();
        setIsPlaying(true);

       if (userChoice) {
        setTimeout(() => {
            setUserSelection(userChoice);
            setComputerChoice(computerChoice);
            const winner = getResults(userChoice, computerChoice);
               onPlay(winner);
            setIsPlaying(false);
            }, 1000);
    }
}

    return <>
    <button disabled={isPlaying} onClick={() => onUserSelection('paper')}>New Game</button>
        <SelectTool userSelection={userSelection} setUserSelection={onUserSelection}/>
        <div>Your Choice: {userSelection}</div>
        {isPlaying && <div>calculating...</div>}
        <div>Computer Choice: {computerChoice}</div>
    </>

};

export default Game;