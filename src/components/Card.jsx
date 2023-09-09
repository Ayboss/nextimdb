import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

function Card({ movie }) {
  // console.log(movie);
  return (
    <div className="group px-4 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/pacman.svg"
          alt="image not found"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <p className="truncate  ">{movie.overviewv}</p>
          <h2 className="truncate text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center space-x-2">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
