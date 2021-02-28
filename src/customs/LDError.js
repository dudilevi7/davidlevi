import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DLColors } from '../constants/DLColors';

const useStyles = makeStyles({
    root : {
        display : 'flex',
        flexDirection : props => props.language==='English' ? 'row-reverse' : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#D5212E',
        color : 'white',
        marginBottom : '10px' ,
        boxShadow:`0px 4px 0px 0px ${DLColors.darkRed} inset`,
        padding : '5px'
    }
})

const LDError = props => {
    const {...other} = props;
    const classes = useStyles(props);
    return <div className = {classes.root} {...other}/>
}

export default LDError;