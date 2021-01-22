import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"

import sloth from '../../images/yoga-sloth.png'
import burger from '../../images/burger.svg'


const Header = ({ data }) => {

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
          { data.edges.map((edge, i) => {
            const { name, order, urls } = edge.node
            const prettyName = isHamburgerOpen ? name.replace('|', '') : name
            //TODO: list by order ascending
            return (
              <NavLink
                exact to={`/${urls}`}
                key={i}
                activeClassName=''
                className={`anchorLinks--items ${isHamburgerOpen ? "active" : ""}`}>
                 {prettyName}
              </NavLink>
            )
          })}
        </div>
      </header>
    )
}


export default  () => (
  <StaticQuery
    query={graphql`
      query MyQuery2 {
        allContentfulNavLinks{
          edges {
            node {
              name
              urls
              order
            }
          }
        }
      }
    `}
    render={data => (
      <Header data={data.allContentfulNavLinks} />
    )}
  />
)