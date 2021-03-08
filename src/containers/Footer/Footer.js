import { Copyright, Facebook, GitHub, LinkedIn, WhatsApp } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = props => {
    const language = useSelector(state=>state.mainStore.language);
    const strings =  useSelector(state=>state.mainStore.langStrings.footer);

    const onWhatsappClick = ()=> {
        const url = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_PHONE_NUMBER}`;
        window.open(url).focus();
    }
    const onFacebookClick = () => {
        const url = `https://www.facebook.com/profile.php?id=${process.env.REACT_APP_PAGE_ID}`;
        window.open(url).focus();
    }
    const onInstagramClick = () => {
        const url = 'http://instagram.com';
        window.open(url).focus();
    }
    const onLinkedinClick = () =>{
        const url = `https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_URL}`;
        window.open(url).focus();
    }
    const onGitHubClick = () => {
        const url = `https://github.com/${process.env.REACT_APP_GITHUB_URL}`;
        window.open(url).focus();
    }
    const creditStyle = {display:'flex', flexDirection : language==='English' ? 'row' : 'row-reverse', alignItems:'center'}
    return (
        <div className = "footerContainer" style = {language==='Hebrew'? {flexDirection:'row-reverse'} : null}>
            <div className="socialMedia" style = {language==='Hebrew'? {flexDirection:'row-reverse'} : null} >
              <div className="stay">{strings.stay}</div> 
                    <div className = "whatsapp" onClick={onWhatsappClick} >
                        <WhatsApp htmlColor = "white"/></div>
                    {/* <div className = "facebook" onClick={onFacebookClick}>
                            <Facebook htmlColor = "white"/>
                        </div>  */}
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
           <h5 className="copy" style={{color:'#211F1F'}}>{strings.allRights}</h5>
           <Copyright fontSize="small" htmlColor="#211F1F"/> 
               </div> 
        </div>
    )
}
export default Footer;