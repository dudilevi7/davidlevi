import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root : {
        backgroundImage : props=> `linear-gradient(180deg,${props.bgcolor1} 30%,${props.bgcolor2} 70%)`,
        border : props=> `1px solid ${props.border}`,
        borderRadius : 3,
        color : props => `${props.color}`,
        boxShadow : props => `0px 3px 5px 2px ${props.shadow}`,
        padding : '10px 10px',
        margin : 8,
    }
})

const LDButton = props => {
    const {color,...other} = props;
    const classes = useStyles(props);
    return <Button className = {classes.root} {...other}/>
}
LDButton.defaultProps = {
    color : 'black',
    bgcolor1 : 'white',
    bgcolor2 : 'white',
    shadow : 'white',
    border : 'transparent'
}
export default LDButton;