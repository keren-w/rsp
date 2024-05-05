import { useState } from 'react'; 
import {chooseRandomTool, getResults} from './utils';
import SelectTool from '../SelectTool';

const Game = ({onPlay}) => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onUserSelection = (userSelection) => {
            const userChoice = userSelection || chooseRandomTool();
            const computerChoice = chooseRandomTool();
            setIsPlaying(true);
    
            setTimeout(() => {
            setUserChoice(userChoice);
            setComputerChoice(computerChoice);
            const winner = getResults(userChoice, computerChoice);
               onPlay(winner);
            setIsPlaying(false);
            }, 1000);
    }

    return <div className='lalala'>
    <button disabled={isPlaying} onClick={() => onUserSelection}>New Game</button>
    <SelectTool/>
    <div>Your Choice: {userChoice}</div>
    {isPlaying && <div>calculating...</div>}
    <div>Computer Choice: {computerChoice}</div>
    </div>

};

export default Game;