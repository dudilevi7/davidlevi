export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_SUBJECT = "SET_SUBJECT";

export const setLanguage = (language) => ({
    type : SET_LANGUAGE,
    language : language
})

export const setSubject = (subject)=> ({
    type : SET_SUBJECT,
    subject : subject
});