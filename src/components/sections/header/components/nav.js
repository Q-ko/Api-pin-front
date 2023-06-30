import React, { useEffect } from "react";

import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useLocation,
} from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg d-flex felx-column">
      <div class="container">
        <a class="navbar-brand" href="#">
          CHILLING
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-felx w-100">
            <div class="navbar-nav d-flex justify-content-end w-100">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
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
