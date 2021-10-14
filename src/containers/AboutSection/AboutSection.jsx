import React from 'react';
import './AboutSection.scss';
import PoliceGnome from '../../assets/PoliceGnome.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AboutSection = props =>{
    return(
        <div id = "about-section" className = 'about-section'>
            <div className = "image-container">
                <img alt = "police" src = {PoliceGnome}/>
            </div>
            <div className = "details-container">
                <SectionTitle>About Gnomesouls</SectionTitle>
                <p>The first truly community driven project. We will be putting 20% of all sales of gnomes into the Solana
                    mega pot. The first 10k minters will influence and decide on how this is distributed. You are investing
                    into Solana and the Gnomesouls community.
                </p>
            </div>
        </div>
    )
}

export default AboutSection;