import React from "react";
import {} from "react-bootstrap";

const movieImgBaseUrl = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({
  original_title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div>
      <div className="card">
        <div className="image-wrapper">
          <img src={movieImgBaseUrl + poster_path} alt="Poster img" />
        </div>
        <div className="card-body">
          <div className="card-title-wrapper">
            <h5 className="card-title">{original_title}</h5>
          </div>
          <div className="card-text">
            Popularity rating <p>{vote_average}</p>
            {overview}
            </div>
          <a href="index.html" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;

/*  


 <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>


className="d-block w-100"

*/
