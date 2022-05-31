import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Resultados(){
    
  let query = new URLSearchParams(window.location.search); //queryString
  let keyword = query.get('keyword');

  const [moviesResults, setMoviesResults] = useState([]);  

    useEffect(()=>{
        const endPoint =
         `https://api.themoviedb.org/3/search/movie?api_key=ebf115c6e282fb5c608c0bb7af02dbef&language=es-ES&query=${keyword}`;

        axios
        .get(endPoint)
        .then(response =>{
            const resultsMovies = response.data.results;
            if(resultsMovies.length === 0){
              swal(<h4>No se encontraron resultados..</h4>)
            }
            setMoviesResults(resultsMovies)
        })
        .catch(error =>{
          console.log(error);
            swal(<h2>Hubo errores, intenta más tarde...</h2>);
        })
    }, [moviesResults])

    return(
        <>
        <h2>Buscaste : <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No hay resultados</h3>}
        <div className="row">
        {moviesResults.map((oneMovie, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        </>
    )
}
export default Resultados;