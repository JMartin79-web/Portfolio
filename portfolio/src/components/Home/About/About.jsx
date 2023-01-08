import React from 'react'
import Button from '../../Button/Button'
import ColorTxt from '../../ColorTxt/ColorTxt'
import Title from '../../Title/Title'

// fondo
import about_bg from "../../../assets/about_bg.svg"

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
          <p>Mi nombre es Martin Aguirre. Soy un diseñador y desarrollador web Front-End (React). Actualmente estudio desarrollo back-end.
          <br/><br/>
          Me considero una persona responsable y muy curiosa, me encanta aprender. Trato de llevar esa forma de pensar a todo lo que hago. Siempre busco mejorar tanto mis habilidades profesionales como mis cualidades personales. 
          <br/><br/>
          Busco perfeccionar mis habilidades en el mundo IT, así como juntarlas con mis conocimientos en diseño para lograr crear los mejores productos digitales posibles, equilibrando estética con funcionalidad. 
          </p>
        </div>
        
      </div>

      <div className="about-div-btn">
        <p>Si querés saber más sobre mis estudios, habilidades, experiencia laboral, entre otras cosas, descargá o mirá mi curriculum vitae.</p>
        <div className="about-div-btn-btns">
            <Button txt="ver cv"></Button>
            <Button txt="descargar cv"></Button>
        </div>
      </div>

    </div>
    </>
  )
}

export default About