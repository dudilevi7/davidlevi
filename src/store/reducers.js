import { SET_LANGUAGE, SET_SUBJECT } from "./actions"
import strings  from '../constants/strings';

const intialState = {
    language : 'English',
    subject : '',
    langStrings : strings.en
}

const mainReducer = (state = intialState , action = {} ) =>{
    switch(action.type){
        case SET_LANGUAGE : {
            const langStringsTemp = action.language ==='English' ? strings.en : strings.heb;
            return {
                ...state, language : action.language , langStrings : langStringsTemp
            }
        }
        case SET_SUBJECT : {
            return{
                ...state, subject : action.subject
            }
        }
        default : 
         return state;
    }
}
export default mainReducer;