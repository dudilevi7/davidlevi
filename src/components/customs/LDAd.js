import ParticlesBg from 'particles-bg';
import React from 'react';
import Particles from 'react-particles-js';

const LDAdd = props => {

    return (<div className = "adContainer" style = {props.customStyle}>
                <ParticlesBg color="#ffffff" num={100} type="lines" bg={true} />
                {props.children}
             </div>)
}
export default LDAdd;