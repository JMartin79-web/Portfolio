import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className='header'>
        <div className='header-div'>
            <NavLink to="/">Logo</NavLink>
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about">Contacto</NavLink>
        </div>
        
    </div>
    
    </>
  )
}

export default Header