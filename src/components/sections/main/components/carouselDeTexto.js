function CarouselDeTexto(promps) {
  return (
    <div className="position-absolute bg-success bottom-0 end-0 w-50 h-50">
      <div id="ccc" class="carousel slide w-100 h-100 d-flex">
        <div class="carousel-inner align-self-center px-3">
          <div className="carousel-item active">
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
          <div className="carousel-item">
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
          <div className="carousel-item">
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
