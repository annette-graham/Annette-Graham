<div className='contact-form'>
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={e => this.handleSubmit(e)}
>
<div className='input-group'>
  <div className="input-hidden">
    <label htmlFor="bot-field">You're a bot ain't ya</label>
    <input name="bot-field" id="bot-field" />
  </div>
  <Input
    className="standard form-input"
    tag="input"
    label="Name"
    name="Name"
    placeholder="What's yo name fool?"
    onChange={e => this.handleChange(e)}
  />
  <Input
    className="standard form-input"
    label="Email"
    name="Email"
    placeholder="example@email.com"
    tag="input"
    type='email'
    onChange={e => this.handleChange(e)}
  />
  <Input
    className="form-input"
    label="Message"
    name="Message"
    placeholder="Omg Annette U da sh!t. We must hire you. I'll pay you £100k"
    tag="textarea"
    type='textarea'
    onChange={e => this.handleChange(e)}
  />
  <Input
    name="Submit"
    tag="input"
    type='submit'
    className="submit form-input"
  />
</div>
</form>
<img alt="Sloth reading a piece of paper" src={sloth} className='form-image' />
</div>