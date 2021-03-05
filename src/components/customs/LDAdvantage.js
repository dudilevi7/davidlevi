import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root : {
        display : 'flex',
        flexDirection : props => props.direction ,
        color : props=> props.color
    }
})
const LDAdvantage = props => {
    const {color,...other} = props;
    const classes = useStyles(props);
    return (
        <div className = {classes.root} {...other}>
            {props.children}
        </div>
    )
}
LDAdvantage.defaultProps = {
    color : 'black',
    direction : 'row'

}
export default LDAdvantage;