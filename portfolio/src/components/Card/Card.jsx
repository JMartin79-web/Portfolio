import React from 'react'
import Button from '../Button/Button'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-div-img'>
            <img src={props.img} alt="img" className='card-img'/>
        </div>
        <div className='card-div-txt'>
            <h3 className='card-div-title'> {props.titulo} </h3>
            <p className='card-div-p'> {props.txt} </p>
            <Button txt="ver más"></Button>
        </div>

    </div>
  )
}

export default Card