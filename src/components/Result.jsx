import React from "react";

function Result({ result }) {
  return result?.map((movie) => <p>{movie.title}</p>);
}

export default Result;
