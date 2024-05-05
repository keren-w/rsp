import { useState } from 'react'; 
import {chooseRandomTool, getResults} from './utils';

const Game = ({onPlay}) => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);


    return <>
    <button disabled={isPlaying} onClick={() => {
        const userChoice = chooseRandomTool();
        const computerChoice = chooseRandomTool();
        setIsPlaying(true);

        setTimeout(() => {
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
        const winner = getResults(userChoice, computerChoice);
           onPlay(winner);
        setIsPlaying(false);
        }, 1000);

    }}>Play Game</button>
    <div>Your Choice: {userChoice}</div>
    {isPlaying && <div>calculating...</div>}
    <div>Computer Choice: {computerChoice}</div>
    </>

};

export default Game;