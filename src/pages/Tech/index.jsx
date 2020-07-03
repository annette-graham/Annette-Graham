import React from 'react'
import sloth from '../../images/hangy-sloth.png'


const Tech = () => {

  return (

    <section id="/tech" className='body'>
      <div className='body-content'>
        <img alt="Sloth doing tree pose" src={sloth} className='branch-image' />
        <h2 className="heading">HERE IS THE TECH I USE</h2>
        <div className='tech-container'>
          <div className='tech-section'>
            <h2>Languages</h2>
            <p>ES6 Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
            <br />
            <h2>Front end</h2>
            <p>React</p>
            <p>Redux (non-production)</p>
            <p>Less</p>
            <p>Sass</p>
            <br />
          </div>
          <div className='tech-section'>
            <h2>Back end</h2>
            <p>NodeJS</p>
            <p>Express</p>
            <p>GraphQL (non-production)</p>
            <p>DynamoDB</p>
            <p>SQL</p>
            <br />
          </div>
          <div className='tech-section'>
            <h2>Cloud</h2>
            <p>AWS Serverless</p>
            <p>AWS EC2</p>
            <p>AWS Lambda</p>
            <p>AWS S3</p>
            <br />
            <h2>Design/UX</h2>
            <p>Figma</p>
          </div>
          <div className='tech-section'>
            <h2>Testing</h2>
            <p>Jest</p>
            <p>Enzyme</p>
            <br />        
          <h2>Tools</h2>
            <p>Atom</p>
            <p>VS Code</p>
            <p>GitHub</p>
            <p>PostMan</p>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Tech
