import React, {useState} from 'react'
import Card from '../Card/Card'
import Divisor from '../Divisor/Divisor'
import Ilustracion from './ProyectosPagina/Ilustracion'

// fotos


function Proyectos() {
  const [categoria, setCategoria] = useState(<div className='category-placeholder'></div>)
  // FUNCIONES QUE MUESTREN LAS TARJETAS CON LOS TRABAJOS
  function mostrarDiseño(){
    setCategoria(
      <div className='categoria-div'>
        <Card
          
          titulo="Tarjeta de negocio"
          txt="Diseño para un negocio de fisioterapia"
        />

        <Card
          titulo="Cucú Pipí"
          txt="Un ejercicio sobre la creación de una identidad visual para una agencia ficticia de diseño."
        />
        <Card
          titulo="Convocatoria Elvis"
          txt={`Piezas gráficas para un concurso de diseño basado en un "artista que desarrolla espectáculos musicales basados en la figura de Elvis Presley, el mítico rey del rock."`}
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
    <div className='proyectos' id='proyectos'>
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