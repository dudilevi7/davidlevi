import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LDCard from '../../components/customs/LDCard';
import TimelineMUI from '@material-ui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import { Facebook, GitHub } from '@material-ui/icons';
import DLIcon from '../../imgs/timeline/icon.png';
import degreeIcon from '../../imgs/timeline/bsc.png';
import findClassIcon from '../../imgs/timeline/findclass.png';
import fifaILLogo from '../../imgs/timeline/fifail.png';
import fifaImg from '../../imgs/timeline/fifaimage.jpg';
import findClassVideo from '../../imgs/findclass.mp4';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { DLColors } from '../../constants/DLColors';
import './Timeline.css';
import LDButton from '../../components/customs/LDButton';

const Timeline = props => {
    const [dialog,setDialog] = useState('');
    const [play,setPlay] = useState(false);

    const strings = useSelector(state=>state.mainStore.langStrings.timeline);

    const style = {
        backgroundColor :'white',
        display : 'flex',
        flexDirection : 'column',
        height:'100vh',
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
                 <Typography className="title" variant = "h3">{strings.title}</Typography>
                    <TimelineMUI className="timelineContainer" align="alternate">
                        <TimelineItem onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}> 
                            <TimelineSeparator>
                                <TimelineDot className="timeItem" variant="outlined" color="grey" style={{backgroundColor:'white'}}>
                                    <img style={{width:'20px',borderRadius:'10px'}} src={DLIcon} alt="DL"/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                                <TimelineContent className="timeItem">
                                  <div className="contentItem"> 
                                      <strong>{strings.item1.title}</strong>
                                      <div>{strings.item1.subtitle}</div>
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
                                  <div className="contentItem2"> 
                                        <strong className="timeItem" onClick={onFindClassClicked}>{strings.item2.title} </strong>
                                        <div className="timeItem" onClick={onFindClassClicked}>{strings.item2.subtitle}</div>
                                        <div className="timeItem" onClick={onFindClassClicked}>{strings.item2.era}</div>
                                        <GitHub className="timeItem" htmlColor="#211F1F" onClick={()=>window.open('https://github.com/dudilevi7/FindClass')}/>
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
                                <TimelineContent>
                                        <div className = "contentItem"> 
                                        <strong>{strings.item3.title}</strong>
                                        <div>{strings.item3.subtitle}</div>
                                            <div>2016 - 2019 </div>
                                        </div>  
                                    </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="grey" >
                                    <img className="timeItem" style={{width:'20px',borderRadius:'10px'}} src={fifaILLogo} alt="fifa" onClick={()=>setDialog('FIFAIL')}/>
                                </TimelineDot>
                            </TimelineSeparator>
                                <TimelineContent>
                                    <div className="contentItem2">
                                      <strong className="timeItem" onClick={()=>setDialog('FIFAIL')}>{strings.item4.title}</strong>
                                        <div className="timeItem" onClick={()=>setDialog('FIFAIL')}>2009 - 2013 </div>
                                        <Facebook className="timeItem" htmlColor="#4267B2" onClick={()=>window.open('https://www.facebook.com/FIFAIL1')}/>
                                    </div>  
                                </TimelineContent>
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
                                <LDButton size="small" color="white" shadow = "#ccc" bgcolor1="#2F2F2F" bgcolor2="#1B1B1B" onClick={()=>setDialog('')}>Close</LDButton>
                                </DialogActions>
                        </Dialog> 
                    : (
                        dialog==='BSc' ? 
                        <Dialog open onClose={()=>setDialog('')} keepMounted>
                        </Dialog>
                    : ( 
                        dialog==='FIFAIL'? 
                        <Dialog open onClose={()=>setDialog('')} keepMounted>
                                <DialogTitle style={{backgroundColor:DLColors.lightBlack,color:'white'}}>{strings.item4.dialog.title}</DialogTitle>
                                <DialogContent >
                                    <p style={{textAlign: 'center'}}> {strings.item4.dialog.para}</p>
                                    <img src = {fifaImg} alt='ipl13' width="100%" height="100%"/>
                                </DialogContent>
                                <DialogActions>
                                    <LDButton size="small" color="white" shadow = "#ccc" bgcolor1="#2F2F2F" bgcolor2="#1B1B1B" onClick={()=>setDialog('')}>{strings.item4.dialog.btn}</LDButton>
                                </DialogActions>
                            </Dialog>
                    : null ))
                    }
            </LDCard>
        </div>
        
    );
}

export default Timeline;