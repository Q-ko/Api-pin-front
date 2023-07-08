import primerSlide from "../../../media/slide-1.jpeg";
import segundoSlide from "../../../media/slide-2.webp";
import tercerSlide from "../../../media/slide-3.webp";
import TextoDeBienvenida from "../components/TextoDeBienvenida";
import CarouselDeTexto from "../components/carouselDeTexto";

function Servicios(promps) {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div
          id="carouselExample2 align-self-center h-100 shadow rounded position-relative"
          class="carousel slide"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={primerSlide} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={primerSlide} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={primerSlide} class="d-block w-100" alt="..." />
            </div>
          </div>
          <CarouselDeTexto />
        </div>
      </div>
    </div>
  );
}

export default Servicios;
