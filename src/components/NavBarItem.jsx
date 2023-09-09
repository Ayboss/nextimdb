"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function NavBarItem({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      href={`/?genre=${params}`}
      className={`hover:text-amber-500 font-semibold p-2 ${
        genre &&
        genre == params &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
}

export default NavBarItem;
