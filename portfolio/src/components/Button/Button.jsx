import React from 'react'

function Button(props) {
  return (
    <>
    <div className='button-contenedor'>
    <button className='button'> {props.txt}</button>

    </div>
    
    </>
    
  )
}

export default Button