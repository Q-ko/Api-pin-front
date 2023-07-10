function TextoDeBienvenida(promps) {
  return (
    <div className="d-flex flex-column position-absolute z-2 w-100 h-100 fondo-de-img texto_de_bienvenida ">
      <div className="container d-flex flex-column justify-content-center h-100 ">
        <div className="row d-flex flex-column align-items-start justify-content-center ">
          <div className="col-12 col-lg-6">
            <h2 className="h2-title fw-bold text-info text-center text-lg-start">
              AQUI LA PAGINA MAS BUENA DEL MUNDO
            </h2>
          </div>
        </div>
        <div className="row d-flex flex-column align-items-start justify-content-center my-2">
          <div className="col-12 col-lg-4">
            <p className=" text-secondary text-center text-lg-start">
              texto aleatori para completar la pagina porque no hay lorem
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col-12 col-lg-2">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoDeBienvenida;
