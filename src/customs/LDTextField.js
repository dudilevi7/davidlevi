import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root : {
        backgroundImage : props=> `linear-gradient(180deg,${props.bgcolor1} 30%,${props.bgcolor2} 70%)`,
        borderRadius : '0px',
        marginBottom : '2px',
    },
    label : {
        right : props=> props.align==='right' ? 0 : 'auto',
        left : 'auto',
        paddingInline : '2px',
        fontSize : '14px'
    },
    input : {
        textAlign : props=> props.align,
        color : 'black',
        border : '1px solid #ccc',
        borderRadius : '3px',
        paddingInline :'2px',
        fontSize : '14px'
    }
})

const LDTextField = props => {
    const {...other} = props;
    const classes = useStyles(props);
    return (
    <TextField className = {classes.root}
               InputLabelProps={{className : classes.label}}
               inputProps={{className : classes.input}} {...other}/>)
}
LDTextField.defaultProps = {
    align : 'right',
    bgcolor1 : 'white',
    bgcolor2 : 'white',
}
export default LDTextField;