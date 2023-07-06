import primerSlide from "../../../media/slide-1.jpeg";
import segundoSlide from "../../../media/slide-2.webp";
import tercerSlide from "../../../media/slide-3.webp";
import TextoDeBienvenida from "../components/TextoDeBienvenida";

function PagePrincipal(promps) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade w-100 h-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner w-100 h-100">
        <div
          className="carousel-item h-100 w-100 active"
          data-bs-interval="4000"
        >
          <TextoDeBienvenida />
          <img src={primerSlide} className="d-block w-100 h-100" alt="..." />
        </div>
        <div className="carousel-item w-100 h-100" data-bs-interval="4000">
          <TextoDeBienvenida />
          <img src={segundoSlide} className="d-block w-100 h-100" alt="..." />
        </div>
        <div className="carousel-item w-100 h-100" data-bs-interval="4000">
          <TextoDeBienvenida />
          <img src={tercerSlide} className="d-block w-100 h-100" alt="..." />
        </div>
      </div>
      <div className="botones-del-slide">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default PagePrincipal;
