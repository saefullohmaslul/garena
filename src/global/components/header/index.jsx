import React from 'react'

import Logo from '@/assets/img/Sea-Undergraduate-Logo.png'
import './index.scss'

const Header = () => {
  return (
    <header>
      <div className="header-container is-flex">
        <img src={Logo} alt="header" />

        <nav className="is-flex">
          <div className="menu-items">
            <a href="#home">Home</a>
          </div>
          <div class="menu-items">
            <a href="#program">Program</a>
          </div>
          <div class="menu-items">
            <a href="#apply-here">Apply Here</a>
          </div>
          <div class="menu-items">
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
