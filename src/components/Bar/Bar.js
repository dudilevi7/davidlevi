import React from 'react';
import { useSelector } from 'react-redux';
import './Bar.css';

const Bar = props => {
    const language = useSelector(state=>state.mainStore.language);
    
    const onButtonClick = scrollTo => {
        var element = document.getElementById(scrollTo);
        if(props.name ==='mobile') props.onBtnClicked() ;

        element.scrollIntoView({behavior : 'smooth' ,block: "start"});
    }
    
    let enBtns = <div className = "btnsContainer">
                                <div className = "barBtn" onClick={onButtonClick.bind(this,"aboutID")}>About</div>
                                <div className = "barBtn" onClick={onButtonClick.bind(this,"worksID")}>Works</div>
                                <div className = "barBtn" onClick={onButtonClick.bind(this,"timeID")}>Timeline</div>
                                <div className = "barBtn" onClick={onButtonClick.bind(this,"contactID")}>Contact</div>
                      </div>;

    let hebBtns = <div className = "btnsContainer">
                    <div className = "barBtn" onClick={onButtonClick.bind(this,"contactID")}>צור קשר</div>
                    <div className = "barBtn" onClick={onButtonClick.bind(this,"timeID")}>ציר זמן</div> 
                    <div className = "barBtn" onClick={onButtonClick.bind(this,"worksID")}>תיק עבודות</div>
                    <div className = "barBtn" onClick={onButtonClick.bind(this,"aboutID")}>אודות</div>
                </div>;

   
    return (
        language === 'English' ? enBtns : hebBtns
    )
}
export default Bar;