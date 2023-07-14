import primerSlide from "../../../media/slide-1.jpeg";

import CarouselDeTexto from "../components/carouselDeTexto";

function Servicios(promps) {
  return (
    <div className="container d-flex align-items-center justify-content-center h-100 servicios">
      <div className="h-75 w-75  bg-img">
        <div className="container h-100">
          <div className="row height-mitad"></div>
          <div className="row height-mitad2 d-flex  justify-content-end align-items-end">
            <div className="col-12 col-lg-9   h-100 px-0 sombra">
              <div
                id="carouselServis"
                class="carousel slide h-100 d-flex align-items-center justify-content-center"
              >
                <div class="carousel-inner h-100">
                  <div class="carousel-item bg-info  padding-xy h-100 active">
                    <div className="container d-flex align-items-center justify-content-center h-100">
                      <div className="row">
                        <div className="col-8">
                          <h5 className="h5  fw-bold font-fam">
                            Compra y Venta de Propiedades
                          </h5>
                        </div>
                        <div className="col-12">
                          <p className="h6 font-fam">
                            <strong>Nos especializamos</strong> en facilitar el
                            proceso de compra y venta de propiedades. Nuestro
                            equipo de expertos en bienes raíces se encargará de
                            brindarte asesoramiento personalizado y guiarte en
                            cada etapa de la transacción. Ya sea que estés
                            buscando comprar tu hogar ideal o vender una
                            propiedad, te ofrecemos un servicio completo que
                            incluye la evaluación precisa de la propiedad, la
                            negociación de precios y condiciones favorables, y
                            una gestión integral para que la experiencia sea
                            fluida y satisfactoria. Confía en nosotros para
                            hacer realidad tus objetivos inmobiliarios.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item bg-light  padding-xy h-100">
                    <div className="container d-flex align-items-center justify-content-center h-100">
                      <div className="row">
                        <div className="col-8">
                          <h5 className="h5  fw-bold font-fam">
                            Gestión de Alquileres
                          </h5>
                        </div>
                        <div className="col-12">
                          <p className="h6 font-fam">
                            <strong>Entendemos</strong> la importancia de una
                            gestión de alquiler eficiente y sin complicaciones.
                            Nuestro equipo se encargará de encontrar inquilinos
                            calificados, gestionar contratos de alquiler,
                            recolectar pagos de alquiler y garantizar el
                            mantenimiento adecuado de las propiedades. Nos
                            ocupamos de todos los aspectos relacionados con el
                            alquiler, permitiéndote disfrutar de los beneficios
                            de ser propietario sin preocupaciones. Confía en
                            nosotros para maximizar tus ingresos y mantener tus
                            propiedades en óptimas condiciones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item bg-secondary  padding-xy h-100">
                    <div className="container d-flex align-items-center justify-content-center h-100">
                      <div className="row">
                        <div className="col-8">
                          <h5 className="h5  fw-bold font-fam">
                            Desarrollo de Proyectos Inmobiliarios
                          </h5>
                        </div>
                        <div className="col-12">
                          <p className="h6 font-fam">
                            <strong>Comprometidos</strong> con la creación de
                            proyectos inmobiliarios excepcionales y de calidad.
                            Nuestro equipo de profesionales trabaja en estrecha
                            colaboración contigo para desarrollar y llevar a
                            cabo proyectos inmobiliarios desde cero. Nos
                            encargamos de todo el proceso, desde la adquisición
                            de terrenos hasta la planificación, diseño
                            arquitectónico, coordinación de constructores y
                            contratistas, y la comercialización de los proyectos
                            finalizados. Ya sea que estés interesado en
                            proyectos residenciales o comerciales, nuestro
                            enfoque meticuloso y nuestro compromiso con la
                            excelencia garantizan resultados exitosos y
                            satisfactorios.
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
