import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
//Dela upp adress, Bas-URL, kategori, api-nyckel.
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=9fdbd9cc154388c397db948ef90193e1";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <section>
      <div className="Container">
      TheWannabeMovieDb App

      <div className="cardContainer">
        {movies.map((movieReq) => (
          <MovieCard key={movieReq.id} {...movieReq} />
        ))}
      </div>

      </div>
    </section>
  );
}
export default App;
