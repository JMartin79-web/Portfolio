import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
function Header() {
  return (
    <>
      <div className="header">

        <div className="header-div">

          <div className="header-div-logo">
            <HashLink  smooth to="/#header">Martin Aguirre</HashLink>
          </div>

          <div className="header-div-links">
            <NavLink to="/proyectos">Proyectos</NavLink>
            <HashLink smooth to="/#contacto">Contacto</HashLink >
          </div>

        </div>

      </div>
    </>
  );
}

export default Header