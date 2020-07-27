import React from 'react'
import sloth from '../../images/hanging-sloth.png'
import { StaticQuery, graphql } from "gatsby"


const Projects = ({ data }) => (
  
  <section id="/projects" className='body'>
    <div className='body-content'>
      <img alt="Sloth hanging from a branch" src={sloth} className='hanging-image' />
      <h2 className="heading">I GOT SWEET F-A PROJECTS</h2>
      <p>This is my project.</p>
      <p>Literally, what else you expect?</p>
      <p>I got nothin else r u happy!?!?!</p>
      <p>Shut up</p>
      <p>Dick.</p>
      <br />
      {data.edges.map((edge, i) => {
        return ( 
        <>
          <h1>{edge.node.title}</h1>
          <p>{edge.node.paragraph.paragraph}</p>
        </>
        )
      })}
    </div>
  </section>
)


export default  () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulProject {
          edges {
            node {
              title
              paragraph {
                paragraph
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Projects data={data.allContentfulProject} />
    )}
  />
)