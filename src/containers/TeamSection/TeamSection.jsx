import React from 'react';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TeamCards from '../../components/TeamCards/TeamCards';
import './TeamSection.scss';
import Member1Image from '../../assets/teammember1.png';
import Member2Image from '../../assets/teammember2.png';
import Member3Image from '../../assets/teammember3.png';
import Member4Image from '../../assets/teammember4.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const TeamSection = props =>{
    return(
        <div id = "team-section" className = "team-section">
            <SectionPadding>
            <SectionTitle>Our Team</SectionTitle>
            <div className = "team-cards-container">
                <TeamCards
                    src = {Member1Image}
                    imgAlt = "yellow anchor gnome"
                    name = "GnomePrince"
                    role = "Co-founder"
                />
                <TeamCards
                    src = {Member3Image}
                    imgAlt = "blue pirate gnome"
                    name = "LuckyGnome"
                    role = "Co-founder"
                />
                <TeamCards
                    src = {Member4Image}
                    imgAlt = "green juice gnome"
                    name = "Cortez"
                    role = "Marketing"
                />
                <TeamCards
                    src = {Member2Image}
                    imgAlt = "orange carot gnome"
                    name = "Klaxxon"
                    role = "Developer"
                />
            </div>
            </SectionPadding>
        </div>
    )
}

export default TeamSection;