import React from 'react';
import './LDCard.css';

const LDCard = props => {
    return (
            <div style = {props.customStyle && props.customStyle} className = "cardContainer">
                {props.children}
            </div>)
}
export default LDCard;