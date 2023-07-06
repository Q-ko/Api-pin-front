import React from "react";

import { NavLink } from "react-router-dom";
import logoSmall from "../../../media/logo_small.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg d-flex felx-column">
      <div className="container">
        {/* <a className="navbar-brand" href="#">
          CHILLING REAL STATE
        </a> */}
        <div>
          <NavLink to="/" className="navbar-brand" aria-current="page">
            <img src={logoSmall} alt="Chilling Real State" />
          </NavLink>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-felx w-100">
            <div className="navbar-nav d-flex justify-content-end w-100">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
              <NavLink to="/servicios" className="nav-link">
                Servicios
              </NavLink>
              <NavLink to="/productos" className="nav-link">
                Productos
              </NavLink>
              <NavLink to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
