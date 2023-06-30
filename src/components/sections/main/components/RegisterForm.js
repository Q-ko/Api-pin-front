function RegisterForm(promps) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center h-100">
      <div className="row d-flex justify-content-center h-100">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="row">
            <div className="col-12 col-lg-8 d-flex mb-3">
              <h2 className="h2-title">Contacto</h2>
            </div>

            <div>
              <form onSubmit={promps.handleSubmit}>
                <div className="mb-3">
                  <label for="email" class="form-label">
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
                  <div id="emailHelp" className="form-text">
                    Presione Enter para verificar el email
                  </div>
                </div>

                {promps.showDiv && !promps.existMail && (
                  <div>
                    <div className="mb-3">
                      <label for="nombre" className="form-label">
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
                    <div className="mb-3">
                      <label for="telefono" class="form-label">
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
                    <h1>
                      Es un gusto volver a verte por aca! En que podemos
                      ayudarte?
                    </h1>
                  </div>
                )}

                <div className="mb-3">
                  <label for="comentario" className="form-label">
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

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
