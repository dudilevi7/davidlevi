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
                 <div className="aboutMe">
                 <Typography variant="body1">
                            {language==='English'? "Hello , my name Is David Levi , Software & web developer. BSc Computer Science graduate. I have a richable experience in developement world with the newest technologies and the modern design libraries . I invite you to get flexible & accessible service thus we'll create adjusted web for you."
                            : <bdi>שלום , אני דוד לוי , מפתח תוכנה ואתרי אינטרנט. בוגר תואר ראשון במדעי המחשב BSc. ברשותי ניסיון רב בעולמות הפיתוח - בטכנולוגיות החדשניות ביותר ובספריות העיצוב המודרניות . <br></br>אתה מוזמן לקבל ממני שירות נגיש וגמיש כך שנבנה את אתר האינטרנט המותאם עבורך</bdi> 
                            }
                            </Typography>
                 </div>
                     <div className="whoIam">
                            <div className="title">
                                    {language==='English'? "So what i'm doing actually?" : 
                                    "?אז מה בעצם אני עושה"}
                            </div>
                            <div className="slogan">
                                    {language==='English'? "► In a world of problems ; be the solution ◄" : 
                                    "► בעולם של בעיות ; תהיה הפתרון ◄"}
                            </div>
                            <Typography variant="body1">
                            {language==='English'? "Increment customer base it's the desire of every business owner , I can make it possible."
                            : <bdi>להגדיל את קהל הלקוחות זהו רצונו של כל בעל עסק , אני יכול להפוך את זה לאפשרי.</bdi> 
                            }
                            </Typography>
                            <Typography variant="body1">
                                {language==='English'? "As an owner you can't do that without website."
                                : <bdi>כבעל עסק שרוצה לגדול ולהגיע ליותר לקוחות לא תוכל לעשות זאת ללא אתר אינטרנט.</bdi> 
                                }
                            </Typography>
                            <Typography variant="body1">
                                {language==='English'? "If you're in the beginning or you have an experienced , website is important tool in our modern world . Via web you'll keep about your costumers and reach new others."
                                : <bdi>אם אתה בתחילת הדרך ובין אם כבר וותיק בתחום , אתר אינטרנט הוא כלי משחק חשוב מאוד בזירה העסקית. באמצעותו תוכל לשמר לקוחות ולמשוך לקוחות חדשים.</bdi> 
                                }
                            </Typography>
                            <Typography variant="body2">
                            {language==='English'? "What is my advantages ?" : 
                                <bdi>מה היתרונות שלי?</bdi>
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
                    </div>
                 </div>

                           
             </LDCard>
        </div>
      
    )
}

export default About;