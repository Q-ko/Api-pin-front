function RegisterForm(promps) {
  return (
    <div className="whidt-contacto">
      <div className="row">
        <div className="col-12 col-lg-8 d-flex mb-3">
          <h2 className="h2-title fw-bold font-fam text-info">Contacto</h2>
        </div>

        <div>
          <form onSubmit={promps.handleSubmit}>
            <div className="mb-2">
              <label for="email" class="form-label font-fam">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={promps.handleChange}
                value={promps.userData.email}
                onBlur={promps.handleBlur}
              />
              <div id="emailHelp" className="form-text font-fam">
                Presione Enter para verificar el email
              </div>
            </div>

            {promps.showDiv && !promps.existMail && (
              <div>
                <div className="mb-2">
                  <label for="nombre" className="form-label font-fam">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    onChange={promps.handleChange}
                    value={promps.userData.nombre}
                    autoFocus
                  />
                </div>
                <div className="mb-2">
                  <label for="telefono" class="form-label font-fam">
                    Numero de telefono
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="telefono"
                    onChange={promps.handleChange}
                    value={promps.userData.telefono}
                  />
                </div>
              </div>
            )}

            {promps.showDiv && promps.existMail && (
              <div>
                <h1 className="font-fam">
                  Es un gusto volver a verte por aca!
                  {promps.userData.nombre} En que podemos ayudarte?
                </h1>
              </div>
            )}

            <div className="mb-3">
              <label for="comentario" className="form-label font-fam">
                Comentario
              </label>
              <input
                type="text"
                className="form-control"
                id="comentario"
                onChange={promps.handleChange}
                value={promps.userData.comentario}
              />
            </div>

            <button type="submit" className="btn btn-primary font-fam">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

{
  /* <div class="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>

<style>
.spinner {
   position: absolute;
   width: 11.5px;
   height: 11.5px;
}

.spinner div {
   position: absolute;
   width: 50%;
   height: 150%;
   background: #1d595e;
   transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
   animation: spinner-fzua35 1.2s calc(var(--delay) * 1.2s) infinite ease;
}

.spinner div:nth-child(1) {
   --delay: 0.12;
   --rotation: 36;
   --translation: 150;
}

.spinner div:nth-child(2) {
   --delay: 0.24;
   --rotation: 72;
   --translation: 150;
}

.spinner div:nth-child(3) {
   --delay: 0.36;
   --rotation: 108;
   --translation: 150;
}

.spinner div:nth-child(4) {
   --delay: 0.48;
   --rotation: 144;
   --translation: 150;
}

.spinner div:nth-child(5) {
   --delay: 0.6;
   --rotation: 180;
   --translation: 150;
}

.spinner div:nth-child(6) {
   --delay: 0.72;
   --rotation: 216;
   --translation: 150;
}

.spinner div:nth-child(7) {
   --delay: 0.84;
   --rotation: 252;
   --translation: 150;
}

.spinner div:nth-child(8) {
   --delay: 0.96;
   --rotation: 288;
   --translation: 150;
}

.spinner div:nth-child(9) {
   --delay: 1.08;
   --rotation: 324;
   --translation: 150;
}

.spinner div:nth-child(10) {
   --delay: 1.2;
   --rotation: 360;
   --translation: 150;
}

@keyframes spinner-fzua35 {
   0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
      transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
   }

   50% {
      transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
   }
}
</style> */
}
