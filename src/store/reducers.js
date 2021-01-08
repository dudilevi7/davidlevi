import { SET_LANGUAGE, SET_SUBJECT } from "./actions"

const intialState = {
    language : 'Hebrew',
    subject : ''
}

const mainReducer = (state = intialState , action = {} ) =>{
    switch(action.type){
        case SET_LANGUAGE : {
            return {
                ...state, language : action.language
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