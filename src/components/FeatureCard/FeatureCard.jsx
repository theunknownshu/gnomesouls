import React from 'react';
import './FeatureCard.scss';

const FeatureCard = props =>{
    const {IconComp, number, feature } = props;
    return(
        <div className = 'feature-card'>
            <IconComp/>
            <h3>{number}</h3>
            <p>{feature}</p>
        </div>
    )
}

export default FeatureCard;