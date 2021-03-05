import React from 'react';
import { useSelector } from 'react-redux';
import LDCard from '../../components/customs/LDCard';
import { Typography } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import { DLColors } from '../../constants/DLColors';
import './About.css';
import LDAdvantage from '../../components/customs/LDAdvantage';
import stackImg from '../../imgs/myStack.png'
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';

function importAll(r) {
	let images = [];
     r.keys().forEach((item, index) => { images[index] = r(item); });
	return images
}

const progLangs = importAll(require.context('../../imgs/langs', false, /\.(png|jpe?g|svg)$/));

const About = props => {
    console.log(progLangs)
    const language = useSelector(state=>state.mainStore.language);
    const strings = useSelector(state=>state.mainStore.langStrings.about);
   
    const direction = language==='English' ? 'row' : 'row-reverse';

    const style = {
        display : 'flex',
        flexDirection : 'column',
        justifyContent:'center',
        alignItems :'center',
        paddingBottom : '0px',
        height : '100vh'
    }
    return (
        <div id = "aboutID">
              <LDCard customStyle = {style}>
                 <div className="aboutContainer">
                        <ResponsiveTypography variant = "h3" className="title">{strings.title}</ResponsiveTypography>
                        <div className="aboutMe">
                            <Typography variant="body1" paragraph>{strings.aboutMe}</Typography>
                        </div>
                        <div className="whoIam">
                                <ResponsiveTypography variant="h4">{strings.whatImDoing}</ResponsiveTypography>
                                <ResponsiveTypography variant="subtitle1" gutterBottom>{strings.slogan}</ResponsiveTypography>
                                <ResponsiveTypography variant="body1">{strings.body1}</ResponsiveTypography>
                                <ResponsiveTypography variant="body1">{strings.body2}</ResponsiveTypography>
                                <ResponsiveTypography variant="body1" paragraph>{strings.body3}</ResponsiveTypography>
                                <ResponsiveTypography variant="h4" paragraph>{strings.body4}</ResponsiveTypography>
                            <div>
                                {strings.advantages.map((advantage,key)=>{
                                return (<LDAdvantage key={key} direction={direction}>
                                                <CheckBox htmlColor={DLColors.lightBlack} />
                                                <ResponsiveTypography variant="subtitle1">{advantage}</ResponsiveTypography>
                                        </LDAdvantage>)
                                })}  
                            </div>
                        
                        </div>
                        <div className="skills">
                            {progLangs.map((img,key)=>{
                                return <img src={img.default} key={key} alt={key}/>
                            })}
                        </div>
                 </div>  
                
             </LDCard>
             
        </div>
      
    )
}

export default About;