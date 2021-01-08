
import { DLColors } from "./DLColors";
export const blackButtonStyle = {cursor : 'pointer',backgroundColor : DLColors.lightBlack, color : 'white',fontWeight:'normal'
,marginBottom : '10px' ,boxShadow:`0px 7px 0px 0px #1B1B1B inset`,marginRight:'5px',marginLeft:'5px',
borderRadius:'5px',borderBottom :  `3px solid #1B1B1B`,padding : '10px'}

export const blueButtonStyle = {cursor : 'pointer',backgroundColor : '#013298', color : 'white',fontWeight:'normal'
,marginBottom : '10px' ,boxShadow:`0px 7px 0px 0px ${DLColors.darkBlue} inset`,marginRight:'5px',marginLeft:'5px',
borderRadius:'5px',borderBottom :  `3px solid ${DLColors.darkBlue}`,padding : '10px'}

export const redButtonStyle = {cursor : 'pointer',backgroundColor : '#D5212E', color : 'white',fontWeight:'normal'
,marginBottom : '10px' ,boxShadow:`0px 7px 0px 0px ${DLColors.darkRed} inset`,marginRight:'5px',marginLeft:'5px',
borderRadius:' 5px',borderBottom :  `3px solid ${DLColors.darkRed}`,padding : '10px'}

export const errorStyle = language => ( {display : 'flex',flexDirection : language==='English' ?'row-reverse' :'row',justifyContent : 'space-between' , alignItems : 'center',backgroundColor : '#D5212E', color : 'white'
,marginBottom : '10px' ,boxShadow:`0px 4px 0px 0px ${DLColors.darkRed} inset`,
borderRadius:'0px',padding : '5px'});

export const aboutStyle = { color :  DLColors.lightBlack,fontWeight:'normal'
 ,boxShadow:`0px 0px 8px 0px #ccc inset`,borderRadius:'4px'}
