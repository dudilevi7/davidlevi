import React, { useState } from 'react';
import logo from '../../imgs/David.png'
import Bar from '../Bar/Bar';
import enImg from '../../imgs/en.png';
import hebImg from '../../imgs/heb.png';
import {Close, Phone} from  '@material-ui/icons'
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../store/actions';
import MenuIcon from '@material-ui/icons/Menu';
import { DLColors } from '../../constants/DLColors';
import { Drawer } from '@material-ui/core';
import './LDHeader.css';

const LDHeader = () => {
    const [showDrawer,setShowDrawer] = useState(false);
    const dispatch = useDispatch();
    const updateLanguage = (lang) => {
        dispatch(setLanguage(lang));
    }
   
    return (
        <div className="headerContainer">
                 <img className="logoImg" style={{cursor : 'pointer'}} src={logo} alt= "logo" 
                 onClick={()=>window.scrollTo({top:'0',behavior:'smooth'})}/>
             <div className="browserBar">
                 <Bar name="browser"/>
              </div>
             <div className = "langSelector">
                <img className="langImg" onClick = {updateLanguage.bind(this,"Hebrew")} src= {hebImg} alt="hebrew"/>
                <img className="langImg" onClick = {updateLanguage.bind(this,"English")} src= {enImg} alt="english"/>
                <div className = "phone">
                   <a href = {`tel:${process.env.REACT_APP_PHONE_NUMBER}`}>
                       <Phone htmlColor = "white" fontSize="small"/>
                    </a>
                </div>
             </div>
            <div className="menuBtn">
                 <MenuIcon htmlColor={DLColors.lightBlack} onClick={()=>setShowDrawer(true)} />
                 <React.Fragment key="right">
                     <Drawer variant={'persistent'} anchor={'right'} open={showDrawer} onClose={()=>setShowDrawer(false)}>
                         <Close htmlColor={DLColors.lightBlack} onClick={()=>setShowDrawer(false)}/>
                         <Bar name="mobile" onBtnClicked={()=>setShowDrawer(false)}/>
                         </Drawer>
                 </React.Fragment>
             </div>
        </div>)
}

export default LDHeader;