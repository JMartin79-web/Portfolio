import React from 'react'
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
            <HashLink smooth to="/">Inicio</HashLink>
            <HashLink smooth to="/#contacto">Contacto</HashLink >
            <HashLink smooth to="/proyectos#proyectos">Proyectos</HashLink>
          </div>

        </div>

      </div>
    </>
  );
}

export default Header