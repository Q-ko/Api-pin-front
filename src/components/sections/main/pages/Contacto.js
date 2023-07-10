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
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center h-100">
      <RegisterForm
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        existMail={existMail}
        showDiv={showDiv}
      />

      {success && (
        <div className="alert alert-success" role="alert">
          Tu solicitud fue enviada con exito!
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          Tuvimos un problema para procesar tu solicitud!
        </div>
      )}
    </div>
  );
}

export default Form;
