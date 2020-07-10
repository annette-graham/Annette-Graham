import React from 'react'
import sloth from '../../images/reading-sloth2.png'

import Input from '../Input'

class Form extends React.Component {
  state = {
    message: ''
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    alert(`Submitted: ${this.state.message}`)
    // mailTo()
  }

  render() {

    return (
      <div className='contact-form'>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={e => this.handleSubmit(e)}
        >
         <input type="hidden" name="form-name" value="contact" />
          <div className="input-hidden">
            <label htmlFor="bot-field">You're a bot ain't ya</label>
            <input name="bot-field" id="bot-field" />
          </div>
          <div className='field'>
            <label className='form-label'>Name</label>
            <input 
              className="standard form-input" 
              name="name" 
              placeholder="What's yo name fool?"
            />
          </div>
          <div className='field'>
            <label className='form-label'>Email</label>
            <input 
              className="standard form-input" 
              name="Email"
              placeholder="just ur email plz"
              type="email" 
            />
          </div>
          <div className='field'>
            <label className='form-label'>Message</label>
            <input 
              className="standard form-input" 
              name="Message" 
              onChange={e => this.handleChange(e)} 
              placeholder="What you gotta say?"
              type="text" 
            />
          </div>
          <div className='field'>
            <label className='form-label'>Send</label>
            <input 
              className="submit form-input" 
              name="send" 
              type="submit" 
            />
        </div>
      </form>
      <img alt="Sloth reading a piece of paper" src={sloth} className='form-image' />
    </div>
    )
  }
}

export default Form