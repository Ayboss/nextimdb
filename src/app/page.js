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
  const data = await response.json();
  // console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <> */}
      <Result />
    </main>
  );
}
