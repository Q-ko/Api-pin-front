function RegisterForm(promps) {
  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label for="email">Company Email</label>
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
                  Es un gusto volver a verte por aca!
                  {promps.userData.nombre}
                  <br></br> En que podemos ayudarte?
                </h4>
              </div>
            )}

            <div class="form-group">
              <label for="textarea">How Can We Help You?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              >
                {" "}
              </textarea>
            </div>
            <button class="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* <form onSubmit={promps.handleSubmit}>
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
            <div className="">
              <h4 className="font-fam">
                Es un gusto volver a verte por aca!
                {promps.userData.nombre}
                <br></br> En que podemos ayudarte?
              </h4>
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
        </form> */}
      </div>
    </div>
  );
}

export default RegisterForm;
