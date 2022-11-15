import React from 'react'

function Button(props) {
  return (
    <>
    <div className='button-contenedor'>
    <button className='button' onClick={props.onClick}> {props.txt}</button>

    </div>
    
    </>
    
  )
}

export default Button