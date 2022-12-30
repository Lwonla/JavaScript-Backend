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
    <section>
    <div className="slider-container">
      <div className="slider">
        <img src={movieImgBaseUrl + poster_path} alt="Poster img" />
        
      </div>
    </div>
    </section>
  );
};
export default MovieCard;

/*  

<h5>{original_title}</h5>
        <p>
          Popularity rating {vote_average} {overview}
        </p>

        
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