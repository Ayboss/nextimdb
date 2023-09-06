import Link from "next/link";
import React from "react";

function MenuItem({ title, link, Icon }) {
  return (
    <div className="mx-4 lg:mx-6 hover:text-amber-600">
      <Link href={link} className="">
        <Icon className="text-2xl sm:hidden" />
        <p className=" hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
