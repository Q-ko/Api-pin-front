function CarouselDeTexto(promps) {
  return (
    <div className="position-absolute bg-warning bottom-0 end-0 w-50 h-50">
      <div
        id="ccc"
        class="carousel slide w-100 h-100 d-flex"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner align-self-center px-3">
          <div className="carousel-item active" data-bs-interval="1000">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-9 col-md-10">
                  <h4 className="text-info d-block w-100">
                    Soy carousel de texto
                  </h4>
                  <p className="text-white fs-6 d-block w-100">
                    Soy info de carousel con mas letras y palabras
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-9 col-md-10">
                  <h4 className="text-info d-block w-100">
                    Soy carousel de texto
                  </h4>
                  <p className="text-white fs-6 d-block w-100">
                    Soy info de carousel con mas letras y palabras
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-9 col-md-10">
                  <h5 className="text-info d-block w-100">
                    Soy carousel de texto
                  </h5>
                  <p className="text-white fs-6 d-block w-100">
                    Soy info de carousel con mas letras y palabras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#ccc"
          data-bs-slide="prev"
        ></button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#ccc"
          data-bs-slide="next"
        ></button>
      </div>
    </div>
  );
}

export default CarouselDeTexto;
