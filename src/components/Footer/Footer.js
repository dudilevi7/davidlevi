import { Copyright, Face, Facebook, GitHub, LinkedIn, WhatsApp } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { GITHUB_URL, LINKEDIN_URL, PAGE_ID, PHONE_NUMBER } from '../../env';
import './Footer.css';

const Footer = props => {
    const language = useSelector(state=>state.mainStore.language);

    const onWhatsappClick = ()=> {
        const url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`;
        window.open(url).focus();
    }
    const onFacebookClick = () => {
        const url = `https://www.facebook.com/profile.php?id=${PAGE_ID}`;
        window.open(url).focus();
    }
    const onInstagramClick = () => {
        const url = 'http://instagram.com';
        window.open(url).focus();
    }
    const onLinkedinClick = () =>{
        const url = `https://www.linkedin.com/in/${LINKEDIN_URL}`;
        window.open(url).focus();
    }
    const onGitHubClick = () => {
        const url = `https://github.com/${GITHUB_URL}`;
        window.open(url).focus();
    }
    const creditStyle = {display:'flex', flexDirection : language==='English' ? 'row' : 'row-reverse', alignItems:'center'}
    return (
        <div className = "footerContainer" style = {language==='Hebrew'? {flexDirection:'row-reverse'} : null}>
            <div className="socialMedia" style = {language==='Hebrew'? {flexDirection:'row-reverse'} : null} >
              <div className="stay">{language==='English'?  'Stay connected' : 'הישארו מחוברים'}</div> 
                    <div className = "whatsapp" onClick={onWhatsappClick} >
                        <WhatsApp htmlColor = "white"/></div>
                    <div className = "facebook" onClick={onFacebookClick}>
                            <Facebook htmlColor = "white"/>
                        </div> 
                    {/* <div className ="instagram" onClick={onInstagramClick} >
                                <Instagram htmlColor = "white"/>
                        </div> */}
                    <div className = "linkedin" onClick={onLinkedinClick}>
                            <LinkedIn htmlColor = "white"/>
                        </div> 
                
                        <div className="github" onClick={onGitHubClick}>
                                <GitHub htmlColor = "#211F1F"/>
                        </div>
            </div>
           <div style={creditStyle}>
           <h5 className="copy" style={{color:'#211F1F'}}>{language==='English'? 'Develop and Design by DAVID LEVI 2020' : '2020 פותח ועוצב על ידי דוד לוי '}</h5>
           <Copyright fontSize="small" htmlColor="#211F1F"/> 
               </div> 
        </div>
    )
}
export default Footer;