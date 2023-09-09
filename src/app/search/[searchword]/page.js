import Result from "@/components/Result";
import React from "react";

const api_token = process.env.API_TOKEN;
async function page({ params }) {
  const searchword = params.searchword;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_token}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchword}&include_adult=false&language=en-US`,
    options
  );

  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();

  if (data.results.length == 0) {
    return <div className="text-center text-lg py-5">No result found</div>;
  }

  return <Result result={data.results} />;
}

export default page;
