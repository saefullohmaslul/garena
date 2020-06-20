import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import Logo from '@/assets/img/Sea-Undergraduate-Logo.png'
import './index.scss'

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header>
      <div className="header-container is-flex">
        <img src={Logo} alt="header" onClick={scrollToTop} />

        <nav className="is-flex">
          <div className="menu-items">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </div>
          <div className="menu-items">
            <Link to="program" spy={true} smooth={true} offset={-70} duration={500}>
              Program
            </Link>
          </div>
          <div className="menu-items">
            <Link to="apply-here" spy={true} smooth={true} offset={-70} duration={500}>
              Apply Here
            </Link>
          </div>
          <div className="menu-items">
            <Link to="faq" spy={true} smooth={true} offset={-70} duration={500}>
              FAQ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
