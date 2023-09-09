import React from "react";
import Card from "./Card";

function Result({ result }) {
  return (
    <div className="max-w-6xl mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4">
      {result?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Result;
