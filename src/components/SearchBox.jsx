"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl m-auto items-center p-4  space-x-2"
    >
      <input
        type="text"
        className="flex-1 outline-none"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={search == ""}
        className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
