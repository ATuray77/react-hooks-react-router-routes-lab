import React from "react";
import { actors } from "../data";

function Actors() {

const actorsInfo = actors.map((actor) => (
  <div key={actor.name}>
    {actor.name}
    <ul>
    { actor.movies.map((movie, index) => (
      <li key={index}>{movie}</li>

    ))}
    </ul>
  </div>
))



  return (
    <>
      <h1>Actors Page</h1>
      {actorsInfo}
    </>
  );
}

export default Actors;
