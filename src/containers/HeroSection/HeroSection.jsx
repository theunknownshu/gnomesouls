import React from 'react';
import './HeroSection.scss';
import HeroGnomeImage from '../../assets/heroGnome.png';
// import MintButton from '../../components/MintButton/MintButton';
import JoinUsBtn from '../../components/JoinUsBtn/JoinUsBtn';

const HeroSection = props =>{
    return(
        <div className = "hero-section">
            <div className = "content">
                <div className = "details-container">
                    <h1>GnomeSouls</h1>
                    <p>10,000 uniquely generated Gnomes</p>
                    <JoinUsBtn/>
                </div>
                <div className = "image-container">
                    <img alt = 'hero gnome' src = {HeroGnomeImage}/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;