import { CircularProgress } from '@material-ui/core';
import { Error } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LDButton from '../../customs/LDButton';
import LDCard from '../../customs/LDCard';
import LDError from '../../customs/LDError';
import LDTextField from '../../customs/LDTextField';
import { setSubject } from '../../store/actions';
import './Contact.css';

const initialState = {
    name : '',
    email : '',
    phone : '',
    message : '',
    errors : [],
    alert : ''
}
const contactReducer = (state , action) => {
    switch(action.type){
        case "HANDLE_INPUT_TEXT": 
        {
          return {
            ...state, [action.field]: action.payload
          }
        }
        default:
          return state;
    }
}

const Contact = props => {
    //form reducer
    const [state,contactDispatch] = useReducer(contactReducer,initialState);
    //state
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
    const alignStyle = language==='Hebrew'? 'right' : 'left';

    /////////functions
    const textChangeHandler = e => {
      if (e.target.name === 'subject') 
        dispatch(setSubject(e.target.value))
      else {
        contactDispatch({
          type : "HANDLE_INPUT_TEXT",
          field : e.target.name,
          payload : e.target.value
        })
      }
    }

    const valdiateForm = () => {
      const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const phoneCheck = /^\d{10}$/; 
      const lettersCheck = /^[a-z\u0590-\u05fe]+$/i;
      let updatedErrors = [];
      
      if (state.name.length<1 || state.email.length<1 || state.phone.length<1 || state.message.length<1 || selectedSubject.length<1){
        updatedErrors.push(language === 'English' ? 'Some input is empty' : 'נא למלא את כל הטופס')
      }
    
       if (!emailCheck.test(state.email)) {
         updatedErrors.push(language === 'English' ? 'Fix your email address' : 'נא לתקן את כתובת המייל')
        }
      
       if (!(state.phone.match(phoneCheck))){
        updatedErrors.push(language === 'English' ? 'Fix your phone' : 'נא לתקן את מספר הפלאפון')
      }
       if (!(state.name.match(lettersCheck))){
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
        setAlert('progress');
        ///---------------------sendEmail-----------------///
        // 
        const response = await fetch('https://davidleviserver.herokuapp.com/contact',{
				method : 'post',
				headers : {'Content-Type': 'application/json; charset=utf-8','Accept-Language' : 'he'},
				body : JSON.stringify({
					email: state.email.toLowerCase(),
					name : state.name,
          phone : state.phone,
          subject : selectedSubject,
					message : state.message
        })});
        const resData = await response.json();
        resData==="success" ? setAlert("success") : setAlert("error")
      }

    }
    return (
      <div id = "contactID">
        <LDCard customStyle = {style}>
           {language==='English'? 'C O N T A C T' : <div>צ ו ר &nbsp;ק ש ר </div>}
           <div className="contactContent">
                  <LDTextField name ="name" type = "text" align={alignStyle} label={language==="Hebrew" ? 'שם': 'Name'} onChange={textChangeHandler} bgcolor2="whitesmoke"/> 
                  <LDTextField name = "email" type = "email" align={alignStyle} label={language==="Hebrew" ? 'מייל': 'Email'} onChange={textChangeHandler} bgcolor2="whitesmoke"/>
                  <LDTextField name = "phone" type = "phone" align={alignStyle} label={language==="Hebrew" ? 'פלאפון': 'Phone'} onChange={textChangeHandler} bgcolor2="whitesmoke"/>
                  <LDTextField name = "subject" type = "text" align={alignStyle} label={language==="Hebrew" ? ' נושא הפנייה': 'Subject'} onChange={textChangeHandler} value={selectedSubject} bgcolor2="whitesmoke"/>
                  <LDTextField name ="message" type = "text" multiline rows="3" align={alignStyle} label={language==="Hebrew" ? 'תוכן הודעה': 'Message'}  onChange={textChangeHandler} bgcolor2="whitesmoke"/>
                  <LDButton size="small" color="white" bgcolor1="#2F2F2F" bgcolor2="#1B1B1B" onClick={onSubmitForm}>{language==='Hebrew' ? "שלח" : 'SEND'}</LDButton>
               {errors.length>0 &&
               <div className = "errorContainer">
                      {errors.map((error,index) => {
                        return <LDError key={index} language={language}>
                                   <Error fontSize='small' htmlColor='white'/>
                                   {error}
                               </LDError>
                      })}
                 </div>}
                 
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
                 : (alert==='progress'?
                       <CircularProgress/> 
                      : null)
                 )
           }
        </LDCard>
      </div>
    );
}
export default Contact