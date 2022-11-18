import React from 'react'

function ColorTxt(props) {
    let colortxt = props.colortxt;
    return (
      <h6 className='colortxt' style={{color:colortxt}}> {props.txt} </h6>
    )
  }

export default ColorTxt