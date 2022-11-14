import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
function Header() {
  return (
    <>
      <div className="header">

        <div className="header-div">

          <div className="header-div-logo">
            <NavLink to="/">Martin Aguirre</NavLink>
          </div>

          <div className="header-div-links">
            <NavLink to="/proyectos">Proyectos</NavLink>
            <HashLink  to="/#contacto">Contacto</HashLink >
          </div>

        </div>

      </div>
    </>
  );
}

export default Header