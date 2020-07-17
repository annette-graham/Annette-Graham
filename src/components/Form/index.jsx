import React, { useState } from 'react'
import sloth from '../../images/reading-sloth2.png'
import send from '../../images/send.svg'
import tick from '../../images/tick.svg'

import Input from '../Input'

const Form = () => {
  
  const [ isSending, setSending ] = useState(false)
  
  const sending = () => setSending(!isSending)

  return (
    <div className='contact-form'>
      <form 
        name="contact"
        method="POST"
        // action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-hidden">
          <label htmlFor="bot-field">You're a bot ain't ya</label>
          <input name="bot-field" id="bot-field" />
        </div>

        <Input
          className="standard form-input"
          tag="input"
          label="Name"
          name="Name"
          id="name"
          placeholder="What's yo name fool?"
        />
        <Input
          className="standard form-input"
          label="Email"
          name="email"
          id="email"
          placeholder="just ur email plz"
          tag="input"
          type='email'
        />
        <Input
          className="form-input"
          label="Message"
          name="message"
          id="message"
          placeholder="What you gotta say then?"
          tag="textarea"
          type='textarea'
        />
        <button
          name="Send"
          tag="input"
          type='submit'
          className="submit field form-input"
          onClick={sending}
        >
          <img
            alt="sending icon"
            className={`send ${isSending ? "animation animation2" : ""}`}
            id="plane" 
            src={`${isSending ? tick : send}`} 
            />
        </button>
      </form>
      <img 
        alt="Sloth reading a piece of paper" 
        className='form-image' 
        src={sloth}
      />
    </div>
  )
}


export default Form