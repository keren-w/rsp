//ToolButton.js
import React from 'react';
import styles from './ToolButton.module.css';
import {ICONS} from '../../common/icons';

const ToolButton = ({name, onClick, isSelected, disabled}) => {
    const selectedClass = isSelected ? styles.selected : '';
    const disabledClass = disabled ? styles.disabled : '';
    return <button disabled={disabled} className={`${styles.toolButton} ${selectedClass} ${disabledClass}`} onClick={() => onClick(name)}>
        <img src={ICONS[name]} alt={name}/>
        </button>
};
export default ToolButton;

