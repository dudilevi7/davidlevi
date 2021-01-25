import React from 'react';
import { useSelector } from 'react-redux';
import LDCard from '../../customs/LDCard';
import { Typography } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import { DLColors } from '../../constants/DLColors';
import './About.css';

const About = props => {
    const language = useSelector(state=>state.mainStore.language)
    const checkStyle = {
        display: 'flex',
        flexDirection : language==='English' ? 'row' : 'row-reverse',
        justifyContent : 'center',
        alignItems : 'flex-end'
    }
    const tadmitStyle = {display:'flex',flexDirection: language==='English' ? 'row' : 'row-reverse'}
    const abiltiesStyle = {display:'flex',flexDirection:'column', alignItems: language==='English' ? 'flex-start' : 'flex-end'}
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems :'center',
        backgroundColor : 'whitesmoke',
        margin : '0px',
        borderRadius : '0px'
    }
    return (
        <div id = "aboutID">
              <LDCard customStyle = {style}>
                 <div>{language==='English' ? 'A B O U T'  : ' א ו ד ו ת'}</div>
                 <div className="aboutContainer">
                        <div className="title">
                                {language==='English'? "So what i'm doing actually?" : 
                                "?אז מה בעצם אני עושה"}
                        </div>
                        <div className="slogan">
                                {language==='English'? "► In a world of problems ; be the solution ◄" : 
                                "► בעולם של בעיות ; תהיה הפתרון ◄"}
                        </div>
                        <Typography variant="body1">
                        {language==='English'? "As a part of my desire to develope , create solutions for problems and touch in successes like the past - the website idea came" : 
                                "כחלק מהרצון שלי להתפתח ולפתח , ליצור מגוון של פתרונות לבעיות ,ולגעת בהצלחות בהן נגעתי בעבר - הגיע רעיון האתר"}
                        </Typography>
                        <Typography variant="body1" style={tadmitStyle}>
                            {language==='English'? "The passion to make something good,to renew,to contribute and to be active is leading me " : 
                                    " התשוקה לעשות טוב , לחדש , לייצר ,לתרום ולהיות פעיל מובילה אותי "
                            }
                        
                        </Typography>
                        <Typography variant="body2">
                        {language==='English'? "Here's some facts on my Toolbox/skills:" : 
                              <bdi>בארגז הכלים שלי ניתן למנות כמה עובדות מעניינות:</bdi>
                        }
                        </Typography>
                      <div style= {abiltiesStyle}>
                            <div style={checkStyle}>
                                <CheckBox htmlColor={DLColors.lightBlack} />
                                <Typography variant="body2">{language==='English' ? "15 Years of computers knowledege" 
                                : <bdi>ניסיון של 15 שנה בעולם המחשבים</bdi>}</Typography>
                            </div>
                            <div style={checkStyle}>
                                <CheckBox htmlColor={DLColors.lightBlack} />
                                <Typography variant="body2">{language==='English' ? "Use above decade with photoshop & design elements" 
                                : <bdi>שימוש של למעלה מעשור בפוטושופ ואלמנטים עיצוביים</bdi>}</Typography>
                            </div>
                            <div style={checkStyle}>
                                <CheckBox htmlColor={DLColors.lightBlack} />
                                <Typography variant="body2">{language==='English' ? "A richable experience with modren web apps like React & Node.js (ES8)" 
                                : <bdi> ניסיון עשיר בבניית אתרים מודרנית כמו React Node.js (ES8) </bdi>}</Typography>
                            </div>
                            <div style={checkStyle}>
                                <CheckBox htmlColor={DLColors.lightBlack} />
                                <Typography variant="body2">{language==='English' ? "Advanced algorithmic thinking " 
                                : <bdi>חשיבה אלגוריתמית מתקדמת</bdi>}</Typography>
                            </div>
                            <div style={checkStyle}>
                                <CheckBox htmlColor={DLColors.lightBlack} />
                                <Typography variant="body2">{language==='English' ? "High social abilties" 
                                : <bdi>יכולות בינאישיות גבוהות</bdi>}</Typography>
                            </div>
                      </div>
                        
                        {/* <Typography variant="body2">
                        {language==='English'? "The goal is that every project or any kind of communiucation will be the highest level" : 
                               "מטרת האתר שכל פרוייקט/התקשרות כזאת או אחרת תהיה ברמה הכי גבוהה"
                        }
                        </Typography> */}

                 </div>

                           
             </LDCard>
        </div>
      
    )
}

export default About;