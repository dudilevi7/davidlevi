
import { DLColors } from "./DLColors";

export const errorStyle = language => ( {display : 'flex',flexDirection : language==='English' ?'row-reverse' :'row',justifyContent : 'space-between' , alignItems : 'center',backgroundColor : '#D5212E', color : 'white'
,marginBottom : '10px' ,boxShadow:`0px 4px 0px 0px ${DLColors.darkRed} inset`,
borderRadius:'0px',padding : '5px'});

export const aboutStyle = { color :  DLColors.lightBlack,fontWeight:'normal'
 ,boxShadow:`0px 0px 8px 0px #ccc inset`,borderRadius:'4px'}
