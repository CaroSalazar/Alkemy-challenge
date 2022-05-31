import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      swal(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swal(<h2>Debes escribir una direccion de correo electrónico válida</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales inválidas</h2>);
      return;
    }

    console.log("Enviar");

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swal(<h2>Ingresaste correctamente</h2>);
        const tokenRecibido = res.data.token;
        sessionStorage.setItem('token', tokenRecibido);
        navigate("/listado");
      });
  };

  let token = sessionStorage.getItem('token');

  return (
    <>
      {token && <Navigate to="/listado" />}
      <div className="row">
        <div className="col-6 offset-3">
          <h2>Formulario de login</h2>
          <form onSubmit={submitHandler}>
            <label className="form-label d-block mt-2">
              <span>Email:</span> <br />
              <input className="form-control" type="email" name="email" />
            </label>
            <br />
            <label className="form-label d-block mt-2">
              <span>Password:</span> <br />
              <input className="form-control" type="password" name="password" />
            </label>
            <br />
            <button className="btn btn-success mt-2" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
