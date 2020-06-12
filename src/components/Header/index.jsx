import PropTypes from 'prop-types'
import React from 'react'

import data from '../../data.json'
import sloth from '../../images/yoga-sloth.png'


let links = data.links.map(link => {
  return (
    <a
      href={link.url}
      key={link.name}
      id={link.name}
      className='anchorLinks--items'>
      {link.name}
    </a>
  )
})

const clickHandler = () => {
  let x = document.getElementsByClassName("anchorLinks")
  x.className === "anchorLinks" ? x.className += "--responsive" : x.className = "anchorLinks"
  console.log(x.className)
}

const Header = ({ className }) => {

  return (
    <header className={`root sticky`}>
      <a className='logoLink'href="/">
       <img alt="Sloth doing tree pose" src={sloth} className='logoImage'/>
     </a>
      <div className='anchorLinks'>
        {links}
        <span className="anchorLinks--items--hamburger" onClick={clickHandler}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </span>
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
