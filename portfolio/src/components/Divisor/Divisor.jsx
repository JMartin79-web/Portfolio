import React from 'react'

function Divisor(props) {
    let bgColor = props.color;
  return (
    <div className='divisor' style={{backgroundColor:bgColor}}></div>
  )
}

export default Divisor