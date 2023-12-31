import React from "react";
import logoOffcanvas from "../../../media/logo-invert.png";
import { NavLink } from "react-router-dom";
import logoSmall from "../../../media/logo_small.png";

function Nav() {
  return (
    <nav class="navbar nav bg-transparent">
      <div class="container w-100">
        <div className="tamano-brand-container">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            <img
              src={logoSmall}
              alt="Chilling Real State"
              className="tamano-brand "
            />
          </NavLink>
        </div>

        <button
          class="custom-toggler navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end width-navbar"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            {/* <h5
              class="offcanvas-title text-warning fw-bold font-fam"
              id="offcanvasNavbarLabel"
            >
              Menu
            </h5> */}
            <div className="">
              <img src={logoOffcanvas} className="width-logo" alt="" />
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-info active"
                  aria-current="page"
                >
                  <span className="text-shadow">Home</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/servicios" className="nav-link text-info">
                  <span className="text-shadow">Servicios</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/productos" className="nav-link text-info">
                  <span className="text-shadow">Destinos de Ensueño</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/nosotros" className="nav-link text-info">
                  <span className="text-shadow">Nosotros</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contacto" className="nav-link text-info">
                  <span className="text-shadow">Contacto</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg d-flex w-100 ">
    //   <div className="container w-100">
    //     <div className="w-75">
    //       <NavLink to="/" className="navbar-brand" aria-current="page">
    //         <img
    //           src={logoSmall}
    //           alt="Chilling Real State"
    //           className="tamño-brand w-50"
    //         />
    //       </NavLink>
    //     </div>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="d-felx w-100">
    //         <div className="navbar-nav d-flex justify-content-end w-100 ">
    //           <NavLink
    //             to="/"
    //             className="nav-link text-info active"
    //             aria-current="page"
    //           >
    //             Home
    //           </NavLink>
    //           <NavLink to="/servicios" className="nav-link text-info">
    //             Servicios
    //           </NavLink>
    //           <NavLink to="/productos" className="nav-link text-info">
    //             Productos
    //           </NavLink>
    //           <NavLink to="/nosotros" className="nav-link text-info">
    //             Nosotros
    //           </NavLink>
    //           <NavLink to="/contacto" className="nav-link text-info">
    //             Contacto
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Nav;
