import React from "react"
import sloth from '../../images/happy-sloth.jpg'


const About = () => {
  return (
    <section id="/about" className='body target'>
      <div className='body-content target'>
        <div className="header-image">        
          <h2 className="heading">ABOUT ME HOLY MOLY</h2>
            <img alt="me" src='https://picsum.photos/id/237/250/250' className='me-image' />
          </div>
        {/* <div className="about-container"> */}
          <div>
            {/* <div className="about-images"> */}

           {/* 
              Can use react hooks!
              useRef will access the dom html elements
              Need a black and white version of the picture and pass as props to functional component
              e.g: <TogglePic monoPic="/images/b+w.jpg" colorPic="/images/color.jpg"

              then in TogglePic:
              Import {useRef} in React import

              const imageRef = useRef(null)
              return (
                  <img
                    onMouseOver{() => {
                      imageRef.current.src = colorPic
                    }} 
                    onMouseOut{() => {
                      imageRef.current.src = monoPic
                    }}
                    ref={imageRef}
                    src={monoPic}/>
                )
            */}
            <img alt="Sloth waving and saying hi" src={sloth} className='image hi-image' />
            {/* </div> */}
            <div>
              <p>This is what I'm about aite</p>
              <br/>
              <p>I'm Annette. I am a software engineer working at the good old BBC lol.</p>
              <p>I did a 9 week webdev bootcamp in NZ then got this job right after.</p>
              <p>Got promoted from junior to midweight within a year so idk guess I'm pretty dope at my job ayeee</p>
              <br/>
              <p>I like sloths</p>
              <p>I'm 26</p>
              <p>Live in London atm</p>
              <p>Killing life</p>
              <p>Chill af</p>
              <p>et cetera</p>
              <br/>
              <p>Thas me. Any more just ask no what I'm sayin'</p>
            </div>
          </div>
        </div>
      {/* </div>    */}
    </section>
  )
}

export default About