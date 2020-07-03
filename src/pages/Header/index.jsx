import PropTypes from 'prop-types'
import React from 'react'

import data from '../../data.json'
import sloth from '../../images/yoga-sloth.png'
import burger from '../../images/burger.svg'


// let links = data.links.map(link => {
//   return (
//     <a
//       href={link.url}
//       key={link.name}
//       id={link.name}
//       className='anchorLinks--items'>
//       {link.name}
//     </a>
//   )
// })


class Header extends React.Component {
  state = {
    hamburgerOpen: false
  }

  toggleMenu = () => {
    this.setState( prevState => ({
      hamburgerOpen: !prevState.hamburgerOpen
    }))
  }

  render() {
    const { hamburgerOpen } = this.state

    return (
      <header className={`root sticky`}>
        <img src={burger} className={`hamburger ${hamburgerOpen ? "active" : ""}`} onClick={this.toggleMenu}/>
        <a className='logoLink'href="/">
         <img alt="Sloth doing tree pose" src={sloth} className='logoImage'/>
       </a>
        <div className={`anchorLinks ${hamburgerOpen ? "active" : ""}`}>
          {
            data.links.map(link => {
              return (
                <a
                  href={link.url}
                  key={link.name}
                  id={link.name}
                  className={`anchorLinks--items ${hamburgerOpen ? "active" : ""}`}>
                  {link.name}
                </a>
              )
            })
          }
        </div>
      </header>
    )
  }
}



export default Header
