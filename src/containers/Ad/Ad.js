
import React from 'react';
import { useSelector } from 'react-redux';
import LDAdd from '../../components/customs/LDAd';
import developerImg from '../../imgs/design2.png'
import LDButton from '../../components/customs/LDButton';
import './Ad.css';
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';

const Ad = props => {
    const language = useSelector(state=>state.mainStore.language);
    const strings = useSelector(state=>state.mainStore.langStrings.ad);

    const adStyle = {
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : language==='English'? 'row' : 'row-reverse',
        paddingInline : '10px',
    }
    const onButtonClick = (scrollTo)=> {
        const element = document.getElementById(scrollTo);
        element.scrollIntoView({behavior : 'smooth' ,block : 'start' , inline : 'start'})
    }
    
    return(
        <LDAdd customStyle = {adStyle}>
            <div className = "adContainer">
                 <img className="img1mobile" alt = "img1mobile" src={developerImg}/>
                 <div className="adTitle">{strings.title}</div>
                 <ResponsiveTypography variant = "subtitle1">{strings.para}</ResponsiveTypography>
                 <div style = {{display:'flex', flexDirection: language==='English'? 'row-reverse' : 'row',justifyContent:'center'}}>
                      <LDButton size="small" color="white"  bgcolor1="#013298" bgcolor2="#000667" onClick={onButtonClick.bind(this,'worksID')}>{strings.btn1}</LDButton>
                      <LDButton size="small" color="white"  bgcolor1="green" bgcolor2="#006400" onClick={onButtonClick.bind(this,'contactID')}>{strings.btn2}</LDButton>
                 </div>
            </div>
            <img className="img1" alt="img1" src = {developerImg}/>
        </LDAdd>
    )
}
export default Ad;