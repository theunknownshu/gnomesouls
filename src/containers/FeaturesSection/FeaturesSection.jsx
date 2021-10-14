import React from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import './FeaturesSection.scss';
import FeatureImage from '../../assets/featuresGnome.png'
import { AttributesIcon, CoinIcon, CombinationIcon, LayerIcon } from '../../components/svg';

const FeaturesSection = props =>{
    return(
        <div className = "features-section">
            <div className = "features-container">
                <FeatureCard
                    IconComp = {LayerIcon}
                    number = "10, 000"
                    feature = "Ever minted"
                />
                <FeatureCard
                    IconComp = {AttributesIcon}
                    number = "130"
                    feature = "Attributes"
                />
                <FeatureCard
                    IconComp = {CombinationIcon}
                    number = "1 Billion +"
                    feature = "Possible combinations"
                />
                <FeatureCard
                    IconComp = {CoinIcon}
                    number = "0"
                    feature = "Minted to date"
                />
            </div>
            <div className = "image-container">
                <ImageWithLoadBg
                    src = {FeatureImage}
                    aspectRatio = {1} 
                    alt = "green gnome"
                />
            </div>
        </div>
    )
}

export default FeaturesSection;