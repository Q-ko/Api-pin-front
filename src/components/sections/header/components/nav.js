import React from "react";

import { NavLink } from "react-router-dom";
import logoSmall from "../../../media/logo_small.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg d-flex w-100 ">
      <div className="container w-100">
        <div className="w-75">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            <img
              src={logoSmall}
              alt="Chilling Real State"
              className="tamño-brand w-50"
            />
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
            <div className="navbar-nav d-flex justify-content-end w-100 ">
              <NavLink
                to="/"
                className="nav-link text-info active"
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink to="/servicios" className="nav-link text-info">
                Servicios
              </NavLink>
              <NavLink to="/productos" className="nav-link text-info">
                Productos
              </NavLink>
              <NavLink to="/nosotros" className="nav-link text-info">
                Nosotros
              </NavLink>
              <NavLink to="/contacto" className="nav-link text-info">
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
