import React from 'react'
import sloth from '../../images/hangy-sloth.png'


const Tech = () => {

  return (

    <>
      <a id="tech" className='body'></a>
      <div className='body-content'>
        <img alt="Sloth doing tree pose" src={sloth} className='branch-image' />
        <h2 className="heading">HERE IS THE TECH I USE</h2>
        <div className='tech-container'>
          <div className='tech-section'>
            <h3>Primary</h3>
            <p>- Javascript</p>
            <p>- React</p>
            <p>- NodeJS</p>
            <p>- Sass</p>
            <p>- AWS Serverless</p>
          </div>
          <div className='tech-section'>
            <h3>Secondary</h3>
            <p>- Express</p>
            <p>- GraphQL</p>
            <p>- Apollo Client</p>
            <p>- Less</p>
            <p>- Jest</p>
            <p>- Enzyme</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Tech
