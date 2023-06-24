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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setSuccess(false);
    setError(false);
    const property = event.target.id;
    const newValue = event.target.value;
    setUserData({ ...userData, [property]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost/Pin-Laravel/public/api/registro-cliente",
        userData
      )
      .then((response) => {
        setUserData({ nombre: "", email: "", telefono: "", comentario: "" });
        setSuccess(true);
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
