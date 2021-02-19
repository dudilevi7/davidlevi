import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import {  blueButtonStyle, greenButtonStyle } from '../../constants/DLStyles';
import { ad1EnPara, ad1EnTitle, ad1HebPara, ad1HebTitle } from '../../constants/strings';
import  {isMobileOnly} from 'react-device-detect';
import LDAdd from '../../customs/LDAd';
import developerImg from '../../imgs/design2.png'
import './Ad.css';
import LDButton from '../../customs/LDButton';

const Ad = props => {
    const language = useSelector(state=>state.mainStore.language);
    const adStyle = {
        display:'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : language==='English'? 'row' : 'row-reverse',
        backgroundImage : 'linear-gradient(180deg,white,whitesmoke,white)',
        backgroundColor : 'white',
        marginTop : isMobileOnly? '57px' : '78px',
        paddingInline : '10px',
        paddingTop : '10px',
    }
    const onButtonClick = (scrollTo)=> {
        const element = document.getElementById(scrollTo);
        element.scrollIntoView({behavior : 'smooth' ,block : 'start' , inline : 'start'})
    }
    
    return(
        <LDAdd customStyle = {adStyle}>
            <div style={{display:'flex',flexDirection:'column'}}>
            <img className="img1mobile" alt = "img1mobile" src={developerImg}/>
                 <div className="adTitle">{language==='English'? ad1EnTitle : ad1HebTitle}</div>
                  <Typography variant = "subtitle1">{language==='English'? ad1EnPara : ad1HebPara}</Typography>
                 <div style = {{display:'flex', flexDirection: language==='English'? 'row-reverse' : 'row',justifyContent:'center'}}>
                 <LDButton size="small" color="white" shadow = "#ccc" bgColor1="#013298" bgColor2="#000667" onClick={onButtonClick.bind(this,'worksID')}>{language==="English" ? 'Interested to see works portfolio' : 'מעוניין לראות תיק עבודות'}</LDButton>
                 <LDButton size="small" color="white" shadow = "#ccc" bgColor1="green" bgColor2="#006400" onClick={onButtonClick.bind(this,'contactID')}>{language==="English" ?"Click here and we'll talk!" : '!לחץ כאן ונדבר'}</LDButton>
                 </div>
            
            </div>
            <img className="img1" alt="img1" src = {developerImg}/>
          
        </LDAdd>
    )
}
export default Ad;