import React from 'react';
import RoadMapCard from '../../components/RoadMapCard/RoadMapCard';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './RoadMapSection.scss';

const roadmap = [
    {
        title: 'August 4th!',
        text: [
            `Planning, extensive research and idealism behind artwork collection`,
            `Website development `,
            `Putting together a clear and thorough marketing plan, ready to execute.`
        ]
    },
    {
        title: "Release the Gnomes!",
        text: [
            `October 25th pre sale members who have acquired this role via discord should
            begin to anticipate the release.`,
            `Release an initial batch of 2,000 rebels with over 100 visual artistic attributes`,
            `Each Individual NFT will have a variety of attributes, rarity levels will be
            introduced to each charasteristics, illustrating the rare pieces.`             
        ]
    },
    {
        title: "Official Launch!",
        text: [
            `Rush straight into our initial phase and get a chance of minting one of our 8,000 additional gnomes`,
            `Each member will have a fair chance of acquiring a Gnome, no time gaps, no private sales after
            pre-sales, an equitable honest launch!`,
            `Begin planning to implement the most notable community, discussed suggestions in further development of the project`
        ]
    },
    {
        title: "Special care packages!",
        text: [
            `After a smooth and fair mint community can begin to show off their most vicious
            looking Gnomes! `,
            `First special care package will be the drop event!` ,
            `Second and third special care packages will be our Quest hunts & contest`                 
        ]
    },
    {
        title: "Collecting the bag!",
        text: [
            `In times of hardship the most bravest, noble and loyal gnomes shall receive shin plasters and riches!`,
            `Begin orchestrating our unique royalty reward system!`,
            `Our unique royalty system will reward GnomeSoul holders on day 8 after launch. All Holders that have
            held GnomeSouls from the mint will receive 60% royalties distributed amongst you.`                
        ]
    },
    {
        title: "Longevity & collecting the bigger...",
        text: [
            `Coming real soon!`

        ]
    }
]

const RoadMapSection = props =>{
    return(
        <div id = "roadmap-section" className = "roadmap-section">
            <SectionPadding>
                <SectionTitle>Roadmap</SectionTitle>
                <div className = "maps-big-container">
                    <div className = "middle-line"/>
                    <div className = 'left-cards-container'>
                        {
                            roadmap.map((detail, i) =>(
                                Boolean((i+1) % 2)) &&
                                <RoadMapCard
                                    key = {i}
                                    number = {`0${i + 1}`}
                                    title = {detail.title}
                                    text = {detail.text}
                                />
                            )
                        }
                    </div>
                    <div className = 'right-cards-container'>
                        {
                            roadmap.map((detail, i) =>(
                                !Boolean(((i+1) % 2))) &&
                                <RoadMapCard
                                    key = {i}
                                    alignleft
                                    number = {`0${i + 1}`}
                                    title = {detail.title}
                                    text = {detail.text}
                                />
                            )
                        }
                    </div>
                </div>
                <div className = "maps-small-container">
                    {
                        roadmap.map((detail, i) =>(
                            <RoadMapCard
                                key = {i}
                                number = {`0${i + 1}`}
                                title = {detail.title}
                                text = {detail.text}
                            />
                        ))
                    }
                </div>
            </SectionPadding>
        </div>
    )
}

export default RoadMapSection;