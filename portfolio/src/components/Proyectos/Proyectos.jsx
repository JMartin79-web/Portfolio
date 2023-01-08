import React, {useState} from 'react'
import Card from '../Card/Card'
import Divisor from '../Divisor/Divisor'
import Ilustracion from './ProyectosPagina/Ilustracion'

// fotos
import fisioterapia from "./../../assets/proyectos/fisioterapia.jpg"
import cucu from "./../../assets/proyectos/cucu.jpg"
import elvis from "./../../assets/proyectos/elvis.jpg"
import conpas from "./../../assets/proyectos/conpas.jpg"
function Proyectos() {
  const [categoria, setCategoria] = useState(<div className='category-placeholder'></div>)
  // FUNCIONES QUE MUESTREN LAS TARJETAS CON LOS TRABAJOS
  function mostrarDiseño(){
    setCategoria(
      <div className='categoria-div'>
        <Divisor color="#2f3130"></Divisor>
        <div className='categoria-div-grid'>
          <Card
            img={fisioterapia}
            titulo="Tarjeta de negocio"
            txt="Diseño para un negocio de fisioterapia"
            linkto="/proyectos/diseño/fisioterapia"
          />

          <Card
            img={cucu}
            titulo="Cucú Pipí"
            txt="Creación de una identidad visual para una agencia ficticia de diseño."
            linkto="/proyectos/diseño/cucu"
          />
          <Card
            img={elvis}
            titulo="Convocatoria Elvis"
            txt={`Piezas gráficas para un concurso basado en Elvis Presley`}
            linkto="/proyectos/diseño/elvis"
          />
          
        </div>
      </div>
    )
  }

  function mostrarIlus(){
    setCategoria(
      <div className='categoria-div'>
        <Divisor color="#2f3130"></Divisor>
        <Ilustracion></Ilustracion>
      </div>
    )
  }

  function mostrarProgramacion(){
    setCategoria(
      <div className='categoria-div'>
        <Divisor color="#2f3130"></Divisor>
        <Card
          img={conpas}
          titulo="Proyecto Conpas"
          txt="Diseño y desarrollo de un sitio web para una empresa que vende productos congelados"
          linkto="/proyectos/programacion/conpas"
        />

      </div>
    )
  }

  return (
    <div className='proyectos' id='proyectos'>
        <div className="proyectos-div">
            <h1>PROYECTOS</h1>
            <br/><br/>
            <div className='proyectos-div-sec'>
              <div className="category" onClick={ () => {mostrarDiseño()}}>Diseño</div>
              <div className="category" onClick={()=>{mostrarIlus()}}>Ilustración</div>
              <div className="category" onClick={()=>{mostrarProgramacion()}}>Programación</div>
            </div>

            <div className="proyectos-div-trabajos" children={categoria}>
              
            </div>
        
        </div>
    </div>
  )
}

export default Proyectos