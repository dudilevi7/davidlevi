import { Error } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {errorStyle } from '../../constants/DLStyles';
import LDButton from '../../customs/LDButton';
import LDCard from '../../customs/LDCard';
import { setSubject } from '../../store/actions';
import './Contact.css';

const Contact = props => {
    //state + main state redux
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [errors,setErrors] = useState([]);
    const [alert,setAlert] = useState('');
    const language = useSelector(state=>state.mainStore.language);
    const selectedSubject = useSelector(state=>state.mainStore.subject);
    const dispatch = useDispatch();

    useEffect(()=>{
      setErrors([])
      dispatch(setSubject(''))
    },[language,dispatch])

    useEffect(()=>{
      if (alert==='success'||alert==='error'){
        setTimeout(()=>{
          setAlert('')
        },3000)
      }
    },[alert])
    ////////////styles
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        margin : '0px 0px 78px 0px',
        padding : '25px 3px 25px 3px',
        borderRadius:'0px'
    }
    const alignStyle = {textAlign : language==='Hebrew'? 'right' : 'left'}
    const msgInputStyle = {...alignStyle,height:'70px' ,marginBottom:'10px' , resize : 'none'};

    /////////functions
 
    const onChangeSubject = event => {
        dispatch(setSubject(event.target.value))
    }
    const valdiateForm = () => {
      const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const phoneCheck = /^\d{10}$/; 
      const lettersCheck = /^[a-z\u0590-\u05fe]+$/i;
      let updatedErrors = [];
      
      if (name.length<1 || email.length<1 || phone.length<1 || message.length<1 || selectedSubject.length<1){
        updatedErrors.push(language === 'English' ? 'Some input is empty' : 'נא למלא את כל הטופס')
      }
    
       if (!emailCheck.test(email)) {
         updatedErrors.push(language === 'English' ? 'Fix your email address' : 'נא לתקן את כתובת המייל')
        }
      
       if (!(phone.match(phoneCheck))){
        updatedErrors.push(language === 'English' ? 'Fix your phone' : 'נא לתקן את מספר הפלאפון')
      }
       if (!(name.match(lettersCheck))){
        updatedErrors.push(language === 'English' ? 'Fix your name - only with letters' : 'נא לתקן את השם  - רק באותיות')
      }
      return updatedErrors;
    }
    const onSubmitForm = async () => {
      let newErrors = valdiateForm();
      if(newErrors.length>0)
          setErrors(newErrors) 
      else {
        setErrors([]);
        ///---------------------sendEmail-----------------///
        const response = await fetch('https://davidleviserver.herokuapp.com/contact',{
				method : 'post',
				headers : {'Content-Type': 'application/json; charset=utf-8','Accept-Language' : 'he'},
				body : JSON.stringify({
					email: email.toLowerCase(),
					name : name,
          phone : phone,
          subject : selectedSubject,
					message : message
        })});
        const resData = await response.json();
        console.log('return',resData)
        resData==="success" ? setAlert("success") : setAlert("error")
      }

    }
    return (
      <div id = "contactID">
        <LDCard customStyle = {style}>
           {language==='English'? 'C O N T A C T' : <div>צ ו ר &nbsp;ק ש ר </div>}
           <div className="contactContent">
                  <input type="text" className="inputStyle" style = {alignStyle} placeholder={language==="Hebrew" ? 'שם': 'Name'} onChange={e=>setName(e.target.value)}/>
                  <input type="email" className="inputStyle" style = {alignStyle} placeholder ={language==="Hebrew" ? 'מייל': 'Email'} onChange={e=>setEmail(e.target.value)}/>
                  <input type="phone" className="inputStyle" style = {alignStyle} placeholder={language==="Hebrew" ? 'פלאפון': 'Phone'} onChange={e=>setPhone(e.target.value)} maxLength={13}/>
                  <div></div>
                  <input type="text" className="inputStyle" style = {alignStyle} placeholder={language==="Hebrew" ? ' נושא הפנייה': 'Subject'} onChange={onChangeSubject} value={selectedSubject} size={34} required/>
                  
               <textarea type="text" className="inputStyle" style = {msgInputStyle} placeholder={language==="Hebrew" ? 'תוכן הודעה': 'Message'}  onChange={e=>setMessage(e.target.value)}/>
               <LDButton size="small" color="white" bgColor1="#2F2F2F" bgColor2="#1B1B1B" onClick={onSubmitForm}>{language==='Hebrew' ? "שלח" : 'SEND'}</LDButton>
               {errors.length>0? 
               <div style = {{fontSize:'13px',marginTop:'10px', display:'flex', flexDirection:'column'}}>
                      {errors.map((error,index)=>{
                        return <div style = {errorStyle(language)} key={index}>
                          <Error fontSize='small' htmlColor='white'/>
                          {error}</div>
                      })}
                 </div> : null}
                 
           </div>
           {alert==='success' ? 
                  <Alert variant="filled" severity="success" onClose={()=>setAlert('')}>
                    {language==='English'? 'The message send successfuly! '
                    : '!ההודעה נשלחה בהצלחה '}
                  </Alert> 
                 : (
                  alert==="error" ? 
                 <Alert variant="filled" severity="error" onClose={()=>setAlert('')}>
                      {language==='English'? "There is system error"
                    : 'ישנה תקלה בשליחת ההודעה'}
                  </Alert> 
                 : null
                 )
           }
        </LDCard>
      </div>
    );
}
export default Contact