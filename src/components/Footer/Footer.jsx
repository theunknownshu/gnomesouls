import React from 'react';
import { DiscordIcon, TwitterIcon } from '../svg';
import './Footer.scss';

const Footer = props =>{
    return(
        <div className = 'footer'>
            <div className = "content">
                <h3>GnomeSouls</h3>
                <p className = "pc-text">Copyright 2021 SolGnomes. All rights reserved.</p>
                <div className = "icons">
                <a
                    href="https://discord.gg/xtKyEKjxxN"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'discord-server-link'
                >
                    <DiscordIcon/>
                </a>
                <a
                    href="https://twitter.com/GnomeSouls"
                    rel="noopener noreferrer"
                    target="_blank" aria-label = 'twitter-link'
                >
                    <TwitterIcon/>
                </a>
                </div>                
            </div>
            <p className = "mobile-text">Copyright 2021 SolGnomes. All rights reserved.</p>
        </div>
    )
}

export default Footer;