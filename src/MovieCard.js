import React from 'react';
const movieImgBaseUrl="https://image.tmdb.org/t/p/w500/";

const MovieCard =({original_title, poster_path, vote_average, release_date, overview})=>{
    return(
    <div>
        <h1>{original_title}</h1>
        <img src={movieImgBaseUrl + poster_path} alt="Poster img"></img>
        <p>{original_title} {vote_average} {overview}</p>
    </div>
    )
}
export default MovieCard;