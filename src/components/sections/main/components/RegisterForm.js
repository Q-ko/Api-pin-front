function RegisterForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center h-100">
      <div className="row d-flex justify-content-center h-100">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="row">
            <div className="col-12 col-lg-8 d-flex mb-3">
              <h2 className="h2-title">Contacto</h2>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={userData.email}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    onChange={handleChange}
                    value={userData.nombre}
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
                    onChange={handleChange}
                    value={userData.telefono}
                  />
                </div>
                <div className="mb-3">
                  <label for="comentario" className="form-label">
                    Comentario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="comentario"
                    onChange={handleChange}
                    value={userData.comentario}
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
