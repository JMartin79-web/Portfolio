import React from 'react'
function HeroSection() {
  let herotext = "Martin Aguirre";
  
  return (
    <div className='herodiv'>
      <p className='heroText'>Hola! <br/>
      Soy {herotext}
      </p>
      <br />
      <p>Sumo mis conocimientos de diseño con el desarrollo de productos digitales. </p>
    </div>
  )
}

export default HeroSection

