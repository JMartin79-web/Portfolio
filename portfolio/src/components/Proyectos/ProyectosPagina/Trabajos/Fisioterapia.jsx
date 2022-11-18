import React from 'react'
import ColorTxt from "./../../../ColorTxt/ColorTxt"
import Divisor from "./../../../Divisor/Divisor"
// FOTOS
import portada from "./../../../../assets/proyectos/fisioterapia/portada_fisioterapia.jpg"
import cliente from "./../../../../assets/proyectos/fisioterapia/cliente.svg"
// fotos tarjetas boceto
import boceto_tarjeta1 from "./../../../../assets/proyectos/fisioterapia/boceto_tarjeta1.jpg"
import boceto_tarjeta2 from "./../../../../assets/proyectos/fisioterapia/boceto_tarjeta2.jpg"

function Fisioterapia() {
  return (
    <>
    <div className='fisioterapia-portada'>
        <img src={portada} alt="portada" />
    </div>

    <div className='fisioterapia'>
      <div className="fisioterapia-div">
        <ColorTxt colortxt="#0b91d6" txt="Diseño gráfico"></ColorTxt>
        <h1>Tarjeta de negocios</h1>
        <Divisor color="#2f3130"></Divisor>

        <div className='fisioterapia-sec-2col'>
          <div className='fisioterapia-sec-txt'>
            <h2>El cliente</h2>
            <p>Emiliano, un gran emprendedor con un negocio de fisioterapia.  
            <br />
            Ya habíamos trabajado en conjunto para la creación de una identidad visual para otro emprendimiento suyo, y esta vez me volvió a contactar para el diseño de una tarjeta de negocios.
            </p>
          </div>

          <div className='fisioterapia-sec-img'>
            <img src={cliente} alt="cliente img" />
          </div>
          
        </div>

        <div className='fisioterapia-sec'>
          <div className='fisioterapia-sec-txt'>
            <h2>El objetivo</h2>
            <p>
            El primer obstáculo con el que nos encontramos fue que el cliente no tenía claro lo que quería conseguir.
            <br />
            Sabía que necesitaba una tarjeta para promocionarse, pero su negocio no tiene una identidad visual en la que apoyarse para el diseño, ni tampoco tenía claro en qué dirección orientarlo.
            <br />
            Ahí entro yo, definiendo como primer objetivo buscar esa estética deseada. 
            </p>
          </div>

          <div className='fisioterapia-sec-img'>
            <img src={cliente} alt="" />
          </div>
        
          
        </div>

      </div>
    </div>

    <div className='fisioterapia2'>
      <div className='fisioterapia2-div'>

        <h2>El proceso</h2>
        <p>Para definir el estilo de la tarjeta, preparé varias pruebas en blanco y negro. Las más destacadas fueron estas dos: </p>
        <div className='fisioterapia-sec-2col50'>
          <img src={boceto_tarjeta1} alt="boceto tarjeta 1" />
          <img src={boceto_tarjeta2} alt="boceto tarjeta 2" />
        </div>

        </div>
    </div>
    </>
    
  )
}

export default Fisioterapia