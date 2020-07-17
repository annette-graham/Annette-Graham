import PropTypes from 'prop-types'
import React, { useState } from 'react'

import data from '../../data.json'
import sloth from '../../images/yoga-sloth.png'
import burger from '../../images/burger.svg'


const Header = () => {

  const [ isHamburgerOpen, setHamburgerOpen ] = useState(false)

  const toggleHamburger = () => setHamburgerOpen(!isHamburgerOpen)

    return (
      <header className={`root sticky`}>
        <img 
          className={`hamburger ${isHamburgerOpen ? "active" : ""}`} 
          onClick={toggleHamburger}
          src={burger} 
        />
        <a className='logoLink'href="/">
         <img 
          alt="Sloth doing tree pose" 
          className='logoImage'
          src={sloth} 
        />
       </a>
        <div className={`anchorLinks ${isHamburgerOpen ? "active" : ""}`}>
          { data.links.map(link => {
            return (
              <a
                href={link.url}
                key={link.name}
                id={link.name}
                className={`anchorLinks--items ${isHamburgerOpen ? "active" : ""}`}>
                {link.name}
              </a>
            )
          })}
        </div>
      </header>
    )
}



export default Header
