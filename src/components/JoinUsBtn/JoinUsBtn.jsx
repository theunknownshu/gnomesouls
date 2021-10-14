import React from 'react';
import './JoinUsBtn.scss';

const JoinUsBtn = props =>{
    return(
        <a
            href="https://discord.gg/xtKyEKjxxN"
            rel="noopener noreferrer"
            target="_blank" aria-label = 'discord-server-link'
        >
            <button className = "primary-button">Join us</button>
        </a>
    )
}

export default JoinUsBtn;