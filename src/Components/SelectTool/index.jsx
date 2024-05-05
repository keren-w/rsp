import React from 'react';
import styles from './SelectTool.module.css';
import {TOOLS} from '../Game/utils';
import Tool from '../ToolButton';
import {useState} from 'react';

const toolIcon = {
        [TOOLS.ROCK]: '✊',
        [TOOLS.PAPER]: '✋',
        [TOOLS.SCISSORS]: '✌'
 }

const SelectTool = () => {
    const [userChoice, setUserChoice] = useState(null);

    return (
        <div className={styles.toolBox}>
            <Tool name={TOOLS.ROCK} userChoice={userChoice} setUserChoice={setUserChoice} isSelected={userChoice === TOOLS.ROCK}/>
            <Tool name={TOOLS.PAPER} userChoice={userChoice} setUserChoice={setUserChoice} isSelected={userChoice === TOOLS.PAPER}/>
            <Tool name={TOOLS.SCISSORS} userChoice={userChoice} setUserChoice={setUserChoice} isSelected={userChoice === TOOLS.SCISSORS}/>
        </div>
    );
};

export default SelectTool;


