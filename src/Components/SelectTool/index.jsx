import React from 'react';
import styles from './SelectTool.module.css';
import {TOOLS} from '../Game/utils';
import Tool from '../ToolButton';
import {useState} from 'react';

const SelectTool = ({userSelection, setUserSelection}) => {
    return (
        <div className={styles.toolBox}>
            <Tool name={TOOLS.ROCK} onClick={(selection) => setUserSelection(selection)} isSelected={userSelection === TOOLS.ROCK}/>
            <Tool name={TOOLS.PAPER} onClick={(selection) => setUserSelection(selection)} isSelected={userSelection === TOOLS.PAPER}/>
            <Tool name={TOOLS.SCISSORS} onClick={(selection) => setUserSelection(selection)} isSelected={userSelection === TOOLS.SCISSORS}/>
        </div>
    );
};

export default SelectTool;


