import primerSlide from "../../../media/img-contact.jpg";
import axios from "axios";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

function Form(params) {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  });

  const [existMail, setExistMail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [buttonState, setButtonState] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    setIsClicked(true);
    setButtonState("onclic");
  };

  const handleChange = (event) => {
    setSuccess(false);
    setError(false);
    const property = event.target.id;
    const newValue = event.target.value;
    setUserData({ ...userData, [property]: newValue });
  };

  const handleBlur = (event) => {
    event.preventDefault();

    const email = event.target.value;
    axios
      .get(
        `https://pin-laravel-production.up.railway.app/api/mail-existe/${email}`
      )
      .then((response) => {
        if (response.data.existe) {
          setExistMail(true);
          setShowDiv(true);
          return axios
            .get(
              `https://pin-laravel-production.up.railway.app/api/rellenar-formulario/${email}`
            )
            .then((response) => {
              const nombre = response.data.nombre;
              console.log(nombre); // Verificar el valor del nombre recibido
              setUserData({ ...userData, nombre: nombre });
              console.log(userData);
              /* .then((response) => {
              const nombre = response.data.datos;
              setUserData({
                ...userData,
                nombre: nombre,
              });
              console.log(userData); */
            });
        } else {
          setExistMail(false);
          setShowDiv(true);
        }
      })
      .catch((error) => {
        setExistMail(false);
        setShowDiv(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://pin-laravel-production.up.railway.app/api/registro-cliente",
        userData
      )
      .then((response) => {
        setUserData({ nombre: "", email: "", telefono: "", comentario: "" });
        setSuccess(true);
        setExistMail(false);
        setShowDiv(false);
        //  Aca setiamos el boton de Submit para validar el estado cdo es valido el request
        setButtonState("validate");
        // aca al boton lo volvemos a poner en default por decirlo cdo tarda mucho la validacion
        setTimeout(() => {
          setButtonState("");
        }, 2000);
      })
      .catch((error) => {
        setError(true);
        setUserData({ nombre: "", email: "", telefono: "", comentario: "" });
        setShowDiv(false);
        setButtonState("");
      });
  };

  return (
    <div className="container h-100  d-flex justify-content-center align-items-center contacto">
      <div className="row h-75 w-100">
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center ms-0 ps-0 h-100">
          <div className="row h-100">
            <div className="col-12 d-flex flex-column justify-content-center">
              <h2 className="fw-bold font-fam text-info ps-1 sombra-contact">
                Contacto
              </h2>
            </div>
            <div className="col-12">
              <RegisterForm
                userData={userData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                existMail={existMail}
                showDiv={showDiv}
                buttonState={buttonState}
                handleClick={handleClick}
              />

              <div className="row pt-1">
                <div className="col-12 col-lg-8">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      Tuvimos un problema con tu solicitud!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col col-lg-6 d-none d-lg-flex justify-content-start align-items-center">
          <img
            src={primerSlide}
            alt="estructura minimalista hormigon rustico pasisaje nieve"
            className="w-100 align-self-center sombra-abajo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Form;
