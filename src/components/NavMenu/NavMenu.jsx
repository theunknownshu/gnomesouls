import { useRef, useEffect, useState, useContext } from "react"
import "./NavMenu.scss"
import gsap from "gsap"
import { MenuContext } from "../../context/menu.context"
import { links } from "../Navbar/Navbar"
import { DiscordIcon, TwitterIcon } from "../svg"

const NavMenu = (props) => {
  const menuRef = useRef(null)
  const linksRef = useRef(null)
  const { hidden, toggleHidden } = useContext(MenuContext)
  const tl = useState(() => gsap.timeline({ paused: true }))[0]
  const connectRef = useRef(null)

  useEffect(() => {
    const linksChildren = [...linksRef.current.children].map((a) => a.children)
    tl.to(menuRef.current, {
      y: 0,
      duration: 1.3,
      ease: "power3.inOut",
    })
      .from(
        linksChildren,
        {
          yPercent: 100,
          duration: 0.5,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.15"
      )
      .from(connectRef.current, {
        duration: 0.7,
        autoAlpha: 0,
      })
  }, [tl])

  useEffect(() => {
    if (!hidden) {
      tl.timeScale(1).play()
    } else {
      tl.timeScale(2).reverse()
    }
  }, [hidden])

  const onLinkClick = () => {
    toggleHidden()
  }
  return (
    <div ref={menuRef} className= "navMenu">
      <div className="content">
        <div className="navListContainer">
          <ul ref={linksRef}>
            {links.map((link, i) => (
              <li key={i} onClick={() => onLinkClick()}>
                <a href = {link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className = 'icons' ref={connectRef}>
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
    </div>
  )
}

export default NavMenu
