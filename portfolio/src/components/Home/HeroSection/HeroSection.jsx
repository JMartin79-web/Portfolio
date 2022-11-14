import React from 'react'
function HeroSection() {
  let herotext = "Martin Aguirre";
  
  return (
    <div className='herodiv'>
      <div className='hero_presentation'>
      <p className='heroText'>Hola! <br/>
      Soy {herotext}
      </p>
      </div>
     
      
    </div>
  )
}

export default HeroSection

