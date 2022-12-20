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
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

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
              <p>Popularity rating {vote_average}</p>
                {original_title} {overview}
              </p>
              <a href="index.html" className="btn btn-primary">
                Go somewhere
              </a>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
