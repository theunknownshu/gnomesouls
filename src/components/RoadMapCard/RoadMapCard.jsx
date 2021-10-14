import React from 'react';
import './RoadMapCard.scss';

const RoadMapCard = props =>{
    const {number, title, text, alignleft} = props;
    return(
        <div alignleft = { alignleft ? 'true' : 'false'} className = "roadmap-card">
            <div className = "number-container">
                <h3>Phase {number}</h3>
            </div>
            <h2>{title}</h2>
            {text && text.map((paragraph, i) =>(
                <p key = {i}>{paragraph}</p>
            ))}
        </div>
    )
}

export default RoadMapCard;