//ToolButton.js
import React from 'react';
import styles from './ToolButton.module.css';
import {ICONS} from '../../common/icons';

const ToolButton = ({name, onClick, isSelected}) => {
    return <button className={`${styles.toolButton} ${isSelected ? styles.selected : ''}`} onClick={() =>onClick(name)}>
        <img src={ICONS[name]} alt={name}/>
        </button>
};
export default ToolButton;

