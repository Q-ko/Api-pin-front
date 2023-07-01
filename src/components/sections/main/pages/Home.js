import primerSlide from "../../../media/slide-1.jpeg";
import segundoSlide from "../../../media/slide-2.webp";
import tercerSlide from "../../../media/slide-3.webp";
import TextoDeBienvenida from "../components/TextoDeBienvenida";

function PagePrincipal(promps) {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-fade h-100"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner h-100">
        <div class="carousel-item h-100  active" data-bs-interval="4000">
          <TextoDeBienvenida />
          <img src={primerSlide} class="d-block w-100 h-100" alt="..." />
        </div>
        <div class="carousel-item h-100" data-bs-interval="4000">
          <TextoDeBienvenida />
          <img src={segundoSlide} class="d-block w-100 h-100" alt="..." />
        </div>
        <div class="carousel-item h-100" data-bs-interval="4000">
          <TextoDeBienvenida />
          <img src={tercerSlide} class="d-block w-100 h-100" alt="..." />
        </div>
      </div>
      <div className="">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default PagePrincipal;
