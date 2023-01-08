import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className='card-div-link' to={props.linkto}>
              <Button txt="ver más"></Button>
            </Link>
            
        </div>

    </div>
  )
}

export default Card