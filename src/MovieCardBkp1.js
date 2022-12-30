import React from "react";
import {} from "react-bootstrap";
//card card-body card-title card-text  <!--style="width: 18rem;"-->
const movieImgBaseUrl = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({
  original_title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className="card">
      <div className="card-img-top">
        <img
          src={movieImgBaseUrl + poster_path}
          class="d-block w-100"
          alt="Poster img"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">
          <p>Popularity rating {vote_average}</p>
          {original_title} {overview}
        </p>
        <a href="index.html" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default MovieCard;
