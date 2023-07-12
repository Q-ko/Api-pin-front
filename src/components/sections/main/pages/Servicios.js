import primerSlide from "../../../media/slide-1.jpeg";

import CarouselDeTexto from "../components/carouselDeTexto";

function Servicios(promps) {
  return (
    <div className="container d-flex align-items-center justify-content-center h-100 servicios">
      <div className="h-75 w-75  bg-img">
        <div className="container h-100">
          <div className="row height-mitad"></div>
          <div className="row height-mitad2 d-flex  justify-content-end">
            <div className="col-12 col-lg-6 col-md-8 col-sm-10 bg-primary">
              <div
                id="carouselServis"
                class="carousel slide h-100 d-flex align-items-center justify-content-center"
              >
                <div class="carousel-inner ">
                  <div class="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-8">
                          <h5 className="h5">TITULO DEL ACROUSEL</h5>
                        </div>
                        <div className="col-12">
                          <p className="h6">
                            texto latgo pero muy latgo del carousel con
                            informacion detallada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-8">
                          <h5 className="h5">TITULO DEL ACROUSEL</h5>
                        </div>
                        <div className="col-12">
                          <p className="h6">
                            texto latgo pero muy latgo del carousel con
                            informacion detallada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselServis"
                  data-bs-slide="prev"
                ></button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselServis"
                  data-bs-slide="next"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
