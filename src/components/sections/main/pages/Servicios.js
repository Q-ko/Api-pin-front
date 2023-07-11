import primerSlide from "../../../media/slide-1.jpeg";

import CarouselDeTexto from "../components/carouselDeTexto";

function Servicios(promps) {
  return (
    <div className="container d-flex align-items-center justify-content-center h-100 servicios">
      <div className="h-75 w-75 bg-img">
        <div className="d-flex align-items-end flex-column justify-content-end h-100">
          <article class="mt-auto p-2">
            <div class="">
              <div class="d-flex mb-3">
                <div class="ps-3">
                  <h6 class="m-0 h6">nombre de persona</h6>
                  <p class="m-0 h6">Lorem, ipsum.</p>
                </div>
              </div>
              <div>
                <p class="text-light h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  vero sequi laborum eaque ab minima rerum beatae, nam
                  perferendis, quos fugiat saepe qui, iure itaque?
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
