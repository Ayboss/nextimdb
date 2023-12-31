import Result from "@/components/Result";
import Image from "next/image";

const api_key = process.env.API_KEY;
const api_token = process.env.API_TOKEN;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  console.log(genre);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_token}`,
    },
    next: { revalidate: 10000 },
  };
  const url =
    genre == "fetchTrending"
      ? "https://api.themoviedb.org/3/trending/all/day?language=en-US"
      : "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();
  console.log(data);

  return (
    <main>
      {/* <> */}
      <Result result={data.results} />
    </main>
  );
}
