import React from 'react';

const LDAdd = props =>{
    return (<div className = "adContainer" style = {props.customStyle}>
              {props.children}
             </div>)
}
export default LDAdd;