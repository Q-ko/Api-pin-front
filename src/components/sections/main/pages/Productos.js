import chicoCorriendo from "../../../media/img-page-3.png";

function Productos(promps) {
  return (
    <div className="h-100 w-100 producto fondo-de-img-prod">
      <div className=" h-100 w-100 d-flex justofy-content-center align-items-center container">
        <div class="accordion w-acordion opacity-75" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button font-fam"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Propiedades en ventas
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body font-fam">
                Descubre nuestra selección exclusiva de propiedades en venta.
                Cada una de estas joyas inmobiliarias ha sido meticulosamente
                elegida por su diseño impecable, ubicación privilegiada y
                características extraordinarias. Desde elegantes mansiones en la
                costa hasta lujosos apartamentos en el corazón de las ciudades
                más cosmopolitas, estas propiedades te brindarán una experiencia
                de vida excepcional. Explora nuestra colección y encuentra el
                hogar de tus sueños.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-fam"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Propiedades en alquiler
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body font-fam">
                Sumérgete en el lujo y disfruta de una estancia inolvidable en
                nuestras propiedades en alquiler. Nuestra selección exclusiva
                ofrece villas privadas con vistas panorámicas, residencias de
                diseño contemporáneo y apartamentos de lujo con servicios
                exclusivos. Cada propiedad ha sido cuidadosamente seleccionada
                para ofrecerte comodidad, elegancia y una experiencia única en
                los destinos más exquisitos. Encuentra la propiedad perfecta
                para tu estancia y crea recuerdos inolvidables.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-fam"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Proyectos en desarrollo
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body font-fam">
                Explora nuestros emocionantes proyectos inmobiliarios en
                desarrollo. Estamos trabajando en la creación de complejos
                residenciales excepcionales, con amenidades de clase mundial y
                comunidades privadas exclusivas. Estos proyectos representan lo
                último en innovación y diseño, y están diseñados para cautivar
                tus sentidos. Descubre un nuevo nivel de vida lujosa y sé parte
                de nuestros proyectos en desarrollo. Prepárate para un futuro
                lleno de elegancia y sofisticación.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
