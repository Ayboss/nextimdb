import Image from "next/image";
import React from "react";

const api_key = process.env.API_KEY;
const api_token = process.env.API_TOKEN;

const getmovie = async (movieid) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_token}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
    options
  );
  const data = response.json();
  return data;
};

async function page({ params }) {
  const movieid = params.id;
  const movie = await getmovie(movieid);
  console.log(movie);
  return (
    <div className="flex max-w-6xl m-auto mt-5 items-center flex-col md:flex-row md:space-x-6">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.poster_path || movie.backdrop_path
        }`}
        width={500}
        height={300}
        className="sm:rounded-t-lg"
        placeholder="blur"
        blurDataURL="/pacman.svg"
        alt="image not found"
        style={{
          maxWidth: "100%",
          height: "100%",
        }}
      />
      <div>
        <h2 className="text-lg font-bold mb-2">
          {movie.title || movie.original_title}
        </h2>
        <p className="mb-2 text-lg">
          <span className="font-bold">Overview: </span>
          {movie?.overview}
        </p>
        <p>
          <span className="font-bold">Date Realease: </span>
          {movie.release_date}
        </p>
        <p>
          <span className="font-bold">Rating: </span>
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
}

export default page;
