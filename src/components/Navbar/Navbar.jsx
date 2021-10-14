import React, {useContext, useEffect, useState} from 'react';
import { MenuContext } from '../../context/menu.context';
import NavTogglerIcon from '../NavTogglerIcon/NavTogglerIcon';
import { DiscordIcon, ToggleIcon, TwitterIcon } from '../svg';
import './Navbar.scss';

export const links = [
    {
      title: "About us",
      href: "/#about-section",
    },
    {
      title: "Showcase",
      href: "/#showcase-section",
    },
    {
      title: "Roadmap",
      href: "/#roadmap-section",
    },
    {
      title: "Team",
      href: "#team-section",
    },
]

const Navbar = props =>{
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    const {toggleHidden, hidden} = useContext(MenuContext);

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                setNavbarTransparent(false);
            }else{
                setNavbarTransparent(true);
            }
        })
    }, [])
    const moveToSection = sectionId =>{
        document.querySelector(`#${sectionId}`).scrollIntoView({behavior: 'smooth'})
    }
    return(
        <nav transparent = {navbarTransparent ? 'true' : 'false'}>
            <div className = 'content'>
                <h4 style = {!hidden ? {color: '#fff'} : {}}>GnomeSouls</h4>
                <ul className = "nav-links-pc">
                    <li onClick = {()=>moveToSection('about-section')}>About us</li>
                    <li onClick = {()=>moveToSection('showcase-section')}>Showcase</li>
                    <li onClick = {()=>moveToSection('roadmap-section')}>Roadmap</li>
                    <li onClick = {()=>moveToSection('team-section')}>Team</li>
                </ul>
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
                <div onClick = {toggleHidden} className = "toggle-icon">
                    <NavTogglerIcon
                        fillColor = {!navbarTransparent || !hidden ? '#fff' : null}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;