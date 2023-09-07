import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex justify-center space-x-2 bg-amber-100 py-4">
      <NavBarItem title={"Trending"} params={"fetchTrending"} />
      <NavBarItem title={"Top Rated"} params={"fetchTopRated"} />
    </div>
  );
}

export default NavBar;
