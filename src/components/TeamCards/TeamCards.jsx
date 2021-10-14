import React from 'react';
import './TeamCards.scss';

const TeamCards = props =>{
    const {src, imgAlt, name, role} = props;
    return(
        <div className = "team-cards">
            <img src = {src} alt = {imgAlt}/>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default TeamCards;