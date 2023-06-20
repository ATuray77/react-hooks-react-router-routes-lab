import React from "react";
import { movies } from "../data";

function Movies() {
  
   const movieData = movies.map((movie) => (
     <div key={movie.title}> 
     {movie.title}
     {movie.time}
  
    <ul>
    {movie.genres.map((genre) => (
      <li key={genre}>{genre}</li>
       ))}
    </ul>
  </div>
    ));

  

  return (
    <>
      <h1>Movies Page</h1>
      {movieData}
    </>
  );
}

export default Movies;
