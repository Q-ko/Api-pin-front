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
      .get(`http://localhost/Pin-Laravel/public/api/mail-existe/${email}`)
      .then((response) => {
        if (response.data.mensaje === "Existe") {
          setExistMail(true);
          setShowDiv(true);
          return axios
            .get(
              `http://localhost/Pin-Laravel/public/api/rellenar-formulario/${email}`
            )
            .then((response) => {
              const nombre = response.data.datos;
              console.log(nombre); // Verificar el valor del nombre recibido
              setUserData((prevUserData) => ({
                ...prevUserData,
                nombre: nombre,
              }));
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
      .post("http://localhost/Api-pin/public/api/registro-cliente", userData)
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
    <div>
      <RegisterForm
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        existMail={existMail}
        showDiv={showDiv}
      />
      {success && (
        <div class="alert alert-success" role="alert">
          Tu solicitud fue enviada con exito!
        </div>
      )}

      {error && (
        <div class="alert alert-danger" role="alert">
          Tuvimos un problema para procesar tu solicitud!
        </div>
      )}
    </div>
  );
}

export default Form;
