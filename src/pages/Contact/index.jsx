import React from 'react'
import sloth from '../../images/reading-sloth2.png'

import SocialMedia from '../../components/SocialMedia'
import Form from '../../components/Form'


const Contact = () => (

  <section id="/contact" className='body'>
    <div className='body-content'>
      <img alt="Sloth reading a piece of paper" src={sloth} className='reading-image' />
      <h2 id="/contact" className="heading">Contact me bitch</h2>
      <Form />
      <SocialMedia />
      <div>
        <br/>
        <p>Built using Gatsby, Contentful, and Netlify. All rights are totz reserved.</p>
        <p>© 2020 Annette Graham</p>
      </div>
    </div>
  </section>
)

export default Contact
