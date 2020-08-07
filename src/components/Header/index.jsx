import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"

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
            const { url, name} = link
            return (
              <a
                href={url}
                key={name}
                id={name}
                className={`anchorLinks--items ${isHamburgerOpen ? "active" : ""}`}>
                {name}
              </a>
            )
          })}
        </div>
      </header>
    )
}

export default Header

// export default  () => (
//   <StaticQuery
//     query={graphql`
//       query MyQuery {
//         allContentfulNavLink{
//           edges {
//             node {
//               name
//               url
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Header data={data.allContentfulNavLink} />
//     )}
//   />
// )