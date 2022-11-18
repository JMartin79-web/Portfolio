import React from 'react'
import Button from '../../Button/Button'
import ColorTxt from '../../ColorTxt/ColorTxt'
import Title from '../../Title/Title'

function About() {
  return (
    <>
    <div className='about'>

      <div className='about-div'>

        <div className='about-div-foto'>
          <img src="#" alt="" />
        </div>

        <div className='about-div-txt'>
          <ColorTxt colortxt="#ffb3bd" txt="About"></ColorTxt>
          <Title title="Hola!"></Title>
          <p>Mi nombre es Martin Aguirre. Soy un diseñador y desarrollador web Front-End. 
          <br />
          Estudié diseño multimedial en la universidad ISEC (no finalizado), y actualmente me encuentro cursando la carrera de Desarrollo Web Full Stack en Coderhouse.  Además de estar estudiando #YoProgramo, la segunda etapa de “Argentina Programa”, un programa nacional y federal que tiene como objetivo capacitar a personas en lenguajes y conocimientos sobre programación. 
          <br />
          También realicé más de 20 cursos en la plataforma Crehana. Algunos de ellos son: 
          <br />
          Manejo y retoque en Photoshop 

          Introduccion a la direccion de arte publicitaria 

          Dirección de Arte para redes sociales 

          Creacion de identidades visuales / Branding emocional 

          Identidad corporativa 

          Técnicas y aplicación del diseño con tipografía 
          <br />
          Me considero una persona responsable y muy curiosa, me encanta aprender. Trato de llevar esa forma de pensar a todo lo que hago. Siempre busco mejorar tanto mis habilidades profesionales como mis cualidades personales.  </p>
          <Button txt="ver cv"></Button>
          <Button txt="descargar cv"></Button>
          
        </div>
      
      </div>
        
    </div>
    </>
  )
}

export default About