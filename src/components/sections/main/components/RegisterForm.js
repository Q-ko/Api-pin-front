function RegisterForm(promps) {
  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <div class="form-container sombra-abajo">
          <form class="form" onSubmit={promps.handleSubmit}>
            <div class="form-group">
              <label for="email" class="form-label font-fam">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={promps.handleChange}
                value={promps.userData.email}
                onBlur={promps.handleBlur}
              />
            </div>
            {promps.showDiv && !promps.existMail && (
              <div>
                <div className="form-group">
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
                <div className="form-group">
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
              <div className="">
                <h4 className="font-fam">
                  Es un gusto volver a verte por aca{" "}
                  <strong className="text-info text-capitalize">
                    {promps.userData.nombre}
                  </strong>
                  !
                </h4>
              </div>
            )}

            <div class="form-group">
              <label for="comentario" class="form-label font-fam">
                Como podemos ayudarte?
              </label>
              <textarea
                type="text"
                className="form-control"
                id="comentario"
                onChange={promps.handleChange}
                value={promps.userData.comentario}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`button-form ${promps.buttonState} ${
                promps.isClicked ? "onclic" : ""
              }`}
              onClick={promps.handleClick}
            ></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
