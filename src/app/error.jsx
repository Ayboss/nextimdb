"use client";
import React, { useEffect } from "react";

function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center py-5">
      <p className="pb-1">Something went wrong somewhere</p>
      <button onClick={reset} className="hover:text-amber-500">
        Try again
      </button>
    </div>
  );
}

export default error;
