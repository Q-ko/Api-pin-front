function TextoDeBienvenida(promps) {
  return (
    <div className="d-flex flex-column position-absolute w-100 h-100 fondo-de-img">
      <div className="container d-flex flex-column justify-content-center h-100 ">
        <div className="row d-flex flex-column align-items-start justify-content-center ">
          <div className="col-12 col-lg-6">
            <h2 className="h2-title text-info">
              AQUI LA PAGINA MAS BUENA DEL MUNDO
            </h2>
          </div>
        </div>
        <div className="row d-flex flex-column align-items-start justify-content-center my-2">
          <div className="col-12 col-lg-4">
            <p className=" text-secondary">
              texto aleatori para completar la pagina porque no hay lorem
            </p>
          </div>
        </div>
        <div className="row d-flex flex-column align-items-start justify-content-center">
          <div className="col-12 col-lg-2">
            <a className="btn btn-info " /* href="#" */ role="button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoDeBienvenida;
