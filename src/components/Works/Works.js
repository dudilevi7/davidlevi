
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import LDButton from '../../customs/LDButton'
import { ArrowDownward, Language } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LDCard from '../../customs/LDCard';
import { enWorks, hebWorks } from '../../data/data';
import { setSubject } from '../../store/actions';
import './Works.css';


const Work = props => {
    const language = useSelector(state => state.mainStore.language);
    const dispatch = useDispatch();
   
    const [isLogo, setIsLogo] = useState(false);

    const visitSite = (url) => {
        window.open(url);
    }
    const onWantBtnClicked = (subject) => {
        dispatch(setSubject(subject));

        const element = document.getElementById('contactID');
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    return (
        <Card className="workContainer" style={{maxWidth:'325px'}}>
            <CardActionArea>
                <CardMedia
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
                    <div>{language==='English'? `Visit on web` : `בקר באתר`}  </div> 
                 </div>
                </LDButton>
                <LDButton size="small" color="green" onClick={onWantBtnClicked.bind(this,props.data.type)}>
                    <div className="workButton" style={{flexDirection: language==='Hebrew' ?'row' : 'row-reverse'}}>
                        <ArrowDownward fontSize='small'/>
                        <div>{language==='English' ? `I Want ${props.data.type}` : ` אני רוצה ${props.data.type}`} </div>
                    </div>
                </LDButton>
            </CardActions>
        </Card>
    )
}

const Works = props => {
    const language = useSelector(state => state.mainStore.language);

    const style = {
        backgroundColor: 'white',
    };

    const works = language === 'English' ? enWorks : hebWorks;

    return (
        <div id="worksID">
            <LDCard customStyle={style}>
                {language === 'English' ? <div> W O R K S </div> : <div>ת י ק &nbsp;ע ב ו ד ו ת</div>}
                <div className="worksContainer">
                {works.map((work, index) => {
                    return <Work key={index} data={work} />
                })}
                </div>
               
            </LDCard>
        </div>

    )
}
export default Works;