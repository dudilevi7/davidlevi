
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubject } from '../../../store/actions';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import LDButton from '../../../components/customs/LDButton'
import { ArrowDownward, Language } from '@material-ui/icons';
import '../Works.css';

const Work = props => {
    const language = useSelector(state => state.mainStore.language);
    const strings = useSelector(state => state.mainStore.langStrings.work);

    const dispatch = useDispatch();
   
    const visitSite = (url) => {
        window.open(url);
    }
    const onWantBtnClicked = (subject) => {
        dispatch(setSubject(subject));

        const element = document.getElementById('contactID');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    return (
        <Card className="workContainer">
            <CardActionArea>
                <CardMedia
                    className="workImg"
                    component="img"
                    image={props.data.screenshot}
                    onClick={visitSite.bind(this,props.data.url)}
                />
                <CardContent className="workContent">
                <div className="workType">{props.data.type}</div>    
                    <div className="workName"><bdi>{props.data.name}</bdi></div>
                    <p className="workDesc">{props.data.description}</p>
                    <div className ="workTags">
                               {props.data.technologies.map((tech,index)=>{
                                    return <div key = {index} className="techTag"><bdi>{"#"+ tech}</bdi></div>
                                })}
                            </div>
                </CardContent>
            </CardActionArea>
            
            <CardActions className="workBtns">           
                <LDButton size="small" color="#013298" onClick={visitSite.bind(this,props.data.url)}>
                 <div className="workButton" style={{flexDirection: language==='Hebrew' ?'row' : 'row-reverse'}}>
                    <Language fontSize="small"/>
                    <div>{strings.btn1}</div> 
                 </div>
                </LDButton>
                <LDButton size="small" color="green" onClick={onWantBtnClicked.bind(this,props.data.type)}>
                    <div className="workButton" style={{flexDirection: language==='Hebrew' ?'row' : 'row-reverse'}}>
                        <ArrowDownward fontSize='small'/>
                        <div>{`${strings.btn2} ${props.data.type}`} </div>
                    </div>
                </LDButton>
            </CardActions>
        </Card>
    );
}
export default Work;