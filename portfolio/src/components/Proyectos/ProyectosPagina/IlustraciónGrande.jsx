import React from 'react'
import Button from '../../Button/Button'

function IlustraciónGrande(props) {

  return (
    <div className='ilustraciónGrande'>
        <div className='ilustraciónGrande-contenedor'>
            <Button className="ilust-btn" onClick={props.onClick} txt="x"></Button>
            <div className='ilustraciónGrande-div'>
                <img src={props.img} id="bigImg" alt="imagen grande" />
            </div>
        </div>

        <div className='ilus-Bg'></div>
    </div>
  )
}

export default IlustraciónGrande