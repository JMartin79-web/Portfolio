import React from 'react'
import Button from '../../Button/Button'

function IlustraciónGrande(props) {

  return (
    <div className='ilustraciónGrande'>
        <div className='ilustraciónGrande-contenedor'>
          
            <div className='ilustraciónGrande-div-btn'>
              <Button className="ilust-btn" onClick={props.onClick} txt="x"></Button>
            </div>
            
            <div className='ilustraciónGrande-div-img'>
                <img src={props.img} id="bigImg" alt="imagen grande" />
            </div>
        </div>

        {/* FILTRO DEL FONDO*/}
        <div className='ilus-Bg'></div>
    </div>
  )
}

export default IlustraciónGrande