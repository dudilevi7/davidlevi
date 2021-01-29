import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LDCard from '../../customs/LDCard';
import TimelineMUI from '@material-ui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import { Facebook, GitHub } from '@material-ui/icons';
import DLIcon from '../../imgs/timeline/icon.png';
import degreeIcon from '../../imgs/timeline/bsc.png';
import findClassIcon from '../../imgs/timeline/findclass.png';
import fifaILLogo from '../../imgs/timeline/fifail.png';
import fifaImg from '../../imgs/timeline/fifaimage.jpg';
import findClassVideo from '../../imgs/findclass.mp4';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { DLColors } from '../../constants/DLColors';
import './Timeline.css';
import { blackButtonStyle } from '../../constants/DLStyles';

const Timeline = props => {
    const [dialog,setDialog] = useState('');
    const [play,setPlay] = useState(false);
    const language = useSelector(state=> state.mainStore.language);
    const style = {
        backgroundColor :'whitesmoke',
        display : 'flex',
        flexDirection : 'column',
        padding : '25px 3px 25px 3px',
        borderRadius:'0px'
    }
    const onFindClassClicked = () => {
        let video = document.getElementById('videoID')
        setPlay(!play);
        play? video.play() : video.pause();
    }
    return (
        <div id = "timeID">
            <LDCard customStyle = {style}>
                {language==='English'? <div> T I M E L I N E </div> : <div>צ י ר &nbsp;ז מ ן </div>}
                    <TimelineMUI className="timelineContainer" align="alternate">
                        <TimelineItem onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}> 
                            <TimelineSeparator>
                                <TimelineDot className="timeItem" variant="outlined" color="grey" style={{backgroundColor:'white'}}>
                                    <img style={{width:'20px',borderRadius:'10px'}} src={DLIcon} alt="DL"/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                                <TimelineContent className="timeItem">
                                  <div style = {{display:'flex',flexDirection:'column',alignItems:'flex-start'}}> 
                                      <strong>{language==='English'? 'David Levi Developer' : 'דוד לוי מתכנת'}</strong>
                                      <div>{language==='English'? 'Client & Server side' : 'צד לקוח וצד שרת'}</div>
                                        <div>2020 - </div>
                                    </div> 
                                </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="grey" className="timeItem">
                                    <img style={{width:'20px',borderRadius:'10px'}} onClick={onFindClassClicked} src={findClassIcon} alt="fc"/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                                <TimelineContent>
                                  <div className="timeItem" style = {{display:'flex',flexDirection:'column',alignItems:'flex-end'}}> 
                                      <strong onClick={onFindClassClicked}>{language==='English'? 'FindClass App' : 'FindClass אפליקציית'} </strong>
                                      <div onClick={onFindClassClicked}>{language==='English'? 'App for students audience that offer logistic solution of classrooms in colleges' : "אפליקציה לקהל הסטודנטים שמהווה פתרון לוגיסטי לכיתות לימוד במכללה"}</div>
                                      <div onClick={onFindClassClicked}>{language==='English'? 'April 2019 - July 2019 ' : "אפריל 2019 - יולי 2019 "}</div>
                                      <GitHub htmlColor="#211F1F" onClick={()=>window.open('https://github.com/dudilevi7/FindClass')}/>
                                        <video id="videoID" allowFullScreen controls>
                                            <source src = {findClassVideo} type ="video/mp4"/>
                                        </video>
                                    </div> 
                                </TimelineContent>
                        </TimelineItem>
                      
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="grey">
                                <img style={{width:'20px',borderRadius:'10px'}} src={degreeIcon} alt="bsc"/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                                <TimelineContent><div style = {{display:'flex',flexDirection:'column',alignItems:'flex-start'}}> 
                                      <strong>{language==='English'?'BSc Computer Science' : 'בוגר תואר ראשון במדעי המחשב'}</strong>
                                      <div>{language==='English'?'Holon Institute Technology' : 'HIT המכון הטכנולוגי חולון'}</div>
                                        <div>2016 - 2019 </div>
                                    </div>  </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="grey" >
                                <img className="timeItem" style={{width:'20px',borderRadius:'10px'}} src={fifaILLogo} alt="fifa" onClick={()=>setDialog('FIFAIL')}/>
                                </TimelineDot>
                            </TimelineSeparator>
                                <TimelineContent>
                                    <div style = {{display:'flex',flexDirection:'column',alignItems:'flex-end'}}> 
                                      <strong className="timeItem" onClick={()=>setDialog('FIFAIL')}>{language==='English'?'FIFA-IL Site manager & creator' : 'מנהל ויוצר באתר פיפא אי אל'}</strong>
                                        <div className="timeItem" onClick={()=>setDialog('FIFAIL')}>2009 - 2013 </div>
                                        <Facebook className="timeItem" htmlColor="#4267B2" onClick={()=>window.open('https://www.facebook.com/FIFAIL1')}/>
                                    </div>  </TimelineContent>
                        </TimelineItem>
                        
                        
                    </TimelineMUI>

                    {/* Dialogs */}
                    {dialog==='DL' ?
                        <Dialog open onClose={()=>setDialog('')} keepMounted>
                                <DialogTitle>Dudi Levi Website</DialogTitle>
                                <DialogContent>
                                    heyyyyyyyyy
                                </DialogContent>
                                <DialogActions>
                                <div style={blackButtonStyle} onClick={()=>setDialog('')}>Close</div>
                                </DialogActions>
                        </Dialog> 
                    : (
                        dialog==='BSc' ? 
                        <Dialog open onClose={()=>setDialog('')} keepMounted>
                        </Dialog>
                    : ( 
                        dialog==='FIFAIL'? 
                        <Dialog open onClose={()=>setDialog('')} keepMounted>
                            <DialogTitle style={{backgroundColor:DLColors.lightBlack,color:'white'}}>{language==='English' ? 'FIFA-IL' : 'פיפא אי-אל'}</DialogTitle>
                            <DialogContent >
                            <p style={{textAlign: 'center'}}>
                                {language==='English'? 
                                "Site leader and creator in FIFA-IL.com website. I created above 50 patches at that time include IPL'S patches (2009-2012). IPL was patch that added the Israeli Premier League to the famous game FIFA . I worked with graphics files and huge database . It was my amazing success , between 200,000-300,000 downloads to each patch."
                                : "מנהל ויוצר באתר פיפא אי-אל בניתי מעל ל50 פאצ'ים (תוספות למשחק) במהלך התקופה כולל המגה פאץ' - להוספת הליגה הישראלית למשחק הכדורגל המפורסם - פיפ''א . עבדתי בעיקר עם מסדי נתונים ענקיים וקבצי גרפיקה והתאמתם לזירה המקומית . הפאצ'ים זכו להצלחה אדירה של 200,000-300,000 הורדות בכל שנה"
                                }
                            </p>
                             <img src = {fifaImg} alt='ipl13' width="100%" height="100%"/>
                            </DialogContent>
                            <DialogActions>
                            <div style={blackButtonStyle} onClick={()=>setDialog('')}>{language==='English'? 'Close' : 'סגור'}</div>
                            </DialogActions>
                            </Dialog>
                    : null ))
                    }
            </LDCard>
        </div>
        
    );
}

export default Timeline;