import { NavLink } from "react-router-dom";
function TextoDeBienvenida(promps) {
  return (
    <div className="d-flex flex-column position-absolute z-2 w-100 h-100 fondo-de-img texto_de_bienvenida ">
      <div className="container d-flex flex-column justify-content-center h-100 ">
        <div className="row d-flex flex-column align-items-start justify-content-center ">
          <div className="col-12 col-lg-6">
            <h2 className="h2-title font-fam fw-bolder text-info text-center text-lg-start">
              Explora la grandeza en bienes raíces
            </h2>
          </div>
        </div>
        <div className="row d-flex flex-column align-items-start justify-content-center my-2">
          <div className="col-12 col-lg-4">
            <p className=" font-fam text-secondary text-center fw-medium text-lg-start">
              Como uno de los mejores agentes inmobiliarios de Argentina,
              Salvatore Ferragamo y su equipo en Chilling Real State lo ayudarán
              a encontrar lo que está buscando.
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col-12 col-lg-2">
            <NavLink to="/servicios">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Ver Más</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoDeBienvenida;
