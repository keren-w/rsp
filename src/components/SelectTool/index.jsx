import React from 'react';
import styles from './SelectTool.module.css';
import {TOOLS} from '../Game/utils';
import Tool from '../ToolButton';
import {useState} from 'react'

const SelectTool = ({userSelection, setUserSelection, disabled}) => {
    return (
        <div className={styles.toolBox}>
            <Tool name={TOOLS.ROCK} onClick={setUserSelection} isSelected={userSelection === TOOLS.ROCK} disabled={disabled}/>
            <Tool name={TOOLS.PAPER} onClick={setUserSelection} isSelected={userSelection === TOOLS.PAPER} disabled={disabled}/>
            <Tool name={TOOLS.SCISSORS} onClick={setUserSelection} isSelected={userSelection === TOOLS.SCISSORS} disabled={disabled}/>
        </div>
    );
};

export default SelectTool;


