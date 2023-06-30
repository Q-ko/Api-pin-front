import primerSlide from "../../../media/slide-1.webp";
import segundoSlide from "../../../media/slide-2.webp";
import tercerSlide from "../../../media/slide-3.webp";

function PagePrincipal(promps) {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={primerSlide} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={segundoSlide} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={tercerSlide} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    // <div className="d-flex flex-column h-100 fondo-de-img">
    //   <div className="container d-flex flex-column justify-content-center h-100 ">
    //     <div className="row d-flex flex-column align-items-start justify-content-center ">
    //       <div className="col-12 col-lg-6">
    //         <h2 className="text-white h2-title ">
    //           AQUI LA PAGINA MAS BUENA DEL MUNDO
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="row d-flex flex-column align-items-start justify-content-center my-2">
    //       <div className="col-12 col-lg-4">
    //         <p className=" text-white">
    //           texto aleatori para completar la pagina porque no hay lorem
    //         </p>
    //       </div>
    //     </div>
    //     <div className="row d-flex flex-column align-items-start justify-content-center">
    //       <div className="col-12 col-lg-2">
    //         <a className="btn btn-primary " href="#" role="button">
    //           Read more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PagePrincipal;
