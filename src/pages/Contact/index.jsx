import React from 'react'
import sloth from '../../images/reading-sloth2.png'

import SocialMedia from '../../components/SocialMedia'
import Form from '../../components/Form'


const Contact = () => {

  return (

    <section id="/contact" className='body'>
      <div className='body-content'>
        <img alt="Sloth reading a piece of paper" src={sloth} className='reading-image' />
          <h2 id="/contact" className="heading">Contact me bitch</h2>
        <div>
          <Form />
          <SocialMedia />
          <p>I got email.</p>
          <p>I got insta.</p>
          <p>I got gihub.</p>
          <p>I got bloody facebook.</p>
          <p>I got codepen.</p>
          <p>what the heck else you want??</p>
          <p>LinkedIn?</p>
          <p>Coz I got that too.</p>
          <br />
        </div>
        <div>
          <br/>
          <p>Built using Create React App, Contentful, and Netlify. All rights are totz reserved.</p>
          <p>© 2020 Annette Graham</p>
        </div>
    </div>
    </section>
  )
}


export default Contact
