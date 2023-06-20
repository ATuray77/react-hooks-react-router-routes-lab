import React from "react";
import { directors, movies } from "../data";


function Directors() {

const directorInfo = directors.map((director) => (
  <div key={director.name}>
    {director.name}
    <ul>
    { director.movies.map((movie, index) => (
      <li key={index}>{movie}</li>
    ))}
    </ul>
  </div>
))


  return (
    <>
      <h1>Directors Page</h1>
      {directorInfo}
    </>
  );
}

export default Directors;
