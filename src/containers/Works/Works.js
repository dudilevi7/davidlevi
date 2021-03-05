
import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import LDCard from '../../components/customs/LDCard';
import { enWorks, hebWorks } from '../../constants/data';
import Work from './Work/Work'
import './Works.css';

const Works = props => {
    const language = useSelector(state => state.mainStore.language);
    const strings = useSelector(state=>state.mainStore.langStrings.works);

    const works = language === 'English' ? enWorks : hebWorks;
    const style = {height:'100vh'}
    return (
        <div id="worksID">
            <LDCard customStyle={style}>
             <Typography className="title" variant = "h3">{strings.title}</Typography>
                <div className="worksContainer"> 
                            {works.map((work, index) => {
                                    return <Work key={index} data={work} />
                              })}
                </div>
            </LDCard>
        </div>

    )
}
export default Works;