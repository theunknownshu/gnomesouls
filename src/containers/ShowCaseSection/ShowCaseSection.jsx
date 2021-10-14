import React from 'react';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import './ShowCaseSection.scss';
import Showcase1Image from '../../assets/showcase1.png';
import Showcase2Image from '../../assets/showcase2.png';
import Showcase3Image from '../../assets/showcase3.png';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ShowCaseSection = props =>{
    return(
        <div id = "showcase-section" className = "showcase-section">
            <SectionPadding>
            <div className = "head">
                <div/>
                <SectionTitle>Showcase</SectionTitle>
                <div className = "controls">

                </div>
            </div>
            <div className = "cases-container">
                <div className = "image">
                    <ImageWithLoadBg
                        src = {Showcase1Image}
                        aspectRatio = {1}
                        alt = 'pink carrot gnome'
                    />
                </div>
                <div className = "image">
                    <ImageWithLoadBg
                        src = {Showcase2Image}
                        aspectRatio = {1}
                        alt = 'ancor pirate gnome'
                    />
                </div>
                <div className = "image">
                    <ImageWithLoadBg
                        src = {Showcase3Image}
                        aspectRatio = {1}
                        alt = 'green orange gnome'
                    />
                </div>
            </div>
            </SectionPadding>
        </div>
    )
}

export default ShowCaseSection;