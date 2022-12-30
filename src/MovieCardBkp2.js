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
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <div class="carousel-inner">
        <div class="carousel-item active">
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
              Popularity rating {vote_average}
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{overview}</li>
                </ul>
              </p>
              <a href="index.html" className="btn btn-primary">
                Go somewhere
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
export default MovieCard;
