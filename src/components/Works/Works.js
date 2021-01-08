
import { ArrowDownward, Web } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {blueButtonStyle, redButtonStyle } from '../../constants/DLStyles';
import LDCard from '../../customs/LDCard';
import { enWorks, hebWorks } from '../../data/data';
import { setSubject } from '../../store/actions';
import './Works.css';


const Work = props => {
    const language = useSelector(state=>state.mainStore.language);
    const dispatch = useDispatch();
    const redBtnStyle = {...redButtonStyle};
    const blueBtnStyle = {...blueButtonStyle};
    const [isLogo,setIsLogo] = useState(false);
    
    const visitSite = (url) => {
        window.open(url);
    }
    const onWantBtnClicked = (subject) =>{
        dispatch(setSubject(subject));
        
        const element = document.getElementById('contactID');
        element.scrollIntoView({block : 'start', behavior : 'smooth'})
    }
    return (<div className='workContainer'>
                <div className="workType" style = {language==='Hebrew' ? {alignSelf:'flex-end'} : null}>{props.data.type}</div>
                <div className="workContent" style = {language==='Hebrew' ? {flexDirection:'row-reverse'} : {flexDirection:'row'}}>
                        <div className = "worksDetails" >
                                <div className="workName"><bdi>{props.data.name}</bdi></div>
                                <p className="workDesc">{props.data.description}</p>
                                <img className="workImgMobile" alt='logo' onClick={visitSite.bind(this,props.data.url)}
                                src={props.data.screenshot} style = {{cursor: 'pointer'}}/>
                                <div className ="workTags">
                                    {props.data.technologies.map((tech,index)=>{
                                        return <div key = {index} className="techTag"><bdi>{"#"+ tech}</bdi></div>
                                    })}
                                </div>
                                <div style = {{display:'flex' ,marginTop:'10px',color : '#ccc',}}>{props.data.year}</div>
                        </div>
                        <div className = "workImgs">
                                <img className="workImg" alt='logo' onMouseEnter={()=>setIsLogo(!isLogo)} onMouseOut={()=>setIsLogo(!isLogo)} onClick={visitSite.bind(this,props.data.url)}
                                src={isLogo? props.data.logo : props.data.screenshot} style = {{cursor: 'pointer'}}/>
                        </div>
                </div>
                <div className="workBtns" style={language==='English' ? {flexDirection:'row' } : {flexDirection:'row-reverse'} }>
                    <div className = "workButton" style = {Object.assign(redBtnStyle,{flexDirection: language==='Hebrew' ?'row' : 'row-reverse'})} onClick={onWantBtnClicked.bind(this,props.data.type)}>
                       <ArrowDownward fontSize='small'/>  
                      <div>{language==='English' ? `I Want ${props.data.type}` : ` אני רוצה ${props.data.type}`} </div>
                    </div>
                    <div className = "workButton" style = {Object.assign(blueBtnStyle,{flexDirection: language==='Hebrew' ?'row' : 'row-reverse'})} onClick={visitSite.bind(this,props.data.url)}>
                        <Web/>  
                        <div>{language==='English'? `Visit on web` : `בקר באתר`}  </div> 
                    </div>
                </div>
            </div>)
}

const Works = props => {
    const language = useSelector(state=>state.mainStore.language);
    
    const style = {
        backgroundColor :'white',
    };

    const works = language==='English' ? enWorks : hebWorks;

    return (
        <div id = "worksID">
            <LDCard customStyle = {style}>
                 {language==='English' ?<div> W O R K S </div> : <div>ת י ק &nbsp;ע ב ו ד ו ת</div>}
                 {works.map((work,index)=>{
                     return <Work key = {index} data = {work}/>
                 })}
            </LDCard>
        </div>
        
    )
}
export default Works;