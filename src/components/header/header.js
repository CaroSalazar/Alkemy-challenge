import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../buscador/buscador";

function Header(props) {
  let token = sessionStorage.getItem("token");
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            AlkeFlix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado">
                  Listado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favoritos">
                  Favoritos
                </Link>
              </li>
              {token && (
                <li className="nav-item d-flex align-items-center">
                  <span className="text-success">
                    {props.favorites.length > 0 && (
                      <>Peliculas en favoritos: {props.favorites.length}</>
                    )}
                  </span>
                </li>
              )}
            </ul>
          </div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}
export default Header;
