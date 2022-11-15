import React, {useState} from 'react'
import Card from '../Card/Card'
import Divisor from '../Divisor/Divisor'
import Ilustracion from './ProyectosPagina/Ilustracion'


function Proyectos() {
  const [categoria, setCategoria] = useState(<div className='category-placeholder'></div>)
  // FUNCIONES QUE MUESTREN LAS TARJETAS CON LOS TRABAJOS
  function mostrarDiseño(){
    setCategoria(
      <div className='categoria-div'>
        <Card
          titulo="hola"
          txt="lorem ipsum"
        />

        <Card
          titulo="hola"
          txt="lorem ipsum"
        />
        <Card
          titulo="hola"
          txt="lorem ipsum"
        />
      </div>
    )
  }

  function mostrarIlus(){
    setCategoria(
      <div className='categoria-div'>
        <Ilustracion></Ilustracion>
      </div>
    )
  }

  function mostrarProgramacion(){
    setCategoria(
      <div className='categoria-div'>
        Estas
      </div>
    )
  }

  return (
    <div className='proyectos'>
        <div className="proyectos-div">
            <h1>PROYECTOS</h1>
            <Divisor color="#2f3130"></Divisor>
            <div className='proyectos-div-sec'>
              <div className="category" onClick={ () => {mostrarDiseño()}}>Diseño</div>
              <div className="category" onClick={()=>{mostrarIlus()}}>Ilustración</div>
              <div className="category" onClick={()=>{mostrarProgramacion()}}>Programación</div>
            </div>

            <div className="proyectos-div-trabajos" children={categoria}></div>
        
        </div>
    </div>
  )
}

export default Proyectos