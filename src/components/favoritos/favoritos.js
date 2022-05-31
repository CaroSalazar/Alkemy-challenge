import React from "react";
import {Navigate, Link } from "react-router-dom";


function Favoritos(props) {
  let token = sessionStorage.getItem("token");
  return (
    <>
     {!token && <Navigate to="/" />}
      <h2>Seccion de favoritos!</h2>
      <div className="row">
        {!props.favorites.length && (
          <div className="col-12 text-danger">Aún no tienes favoritos</div>
        )}
        {props.favorites.map((oneMovie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card my-4">
                <img src={oneMovie.imgUrl} className="card-img-top" alt="..." />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Favoritos;
