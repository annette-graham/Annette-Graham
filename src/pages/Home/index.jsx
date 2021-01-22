import React from 'react'
import sloth from '../../images/main-sloth.png'


const Home = () => {
  const arr = ['I AM ANNETTE AND I AM A SOFTWARE ENGINEER OKAY.', <br/>, 'GOSH']

  return (
    <div className="main-body">
      <div className='home'>
        <a id="top" className='body home-body'></a>
        <div className='home-content'>
          <img alt="Sloth doing tree pose" src={sloth} className='home-sloth' />
          <h1 className="heading">
            {arr}
          </h1>
          <p>Welcome to my website that I built for myself.</p>
          <br/>
          <a href='#about' className='down-arrow'>Down Arrow</a>
        </div>
      </div>
    </div>
  )
}

export default Home