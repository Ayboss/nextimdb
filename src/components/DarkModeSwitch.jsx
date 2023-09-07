"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function DarkModeSwitch() {
  //   const { setTheme, themes, systemTheme } = useTheme();
  //   const [mounted, setMounted] = useState(false);
  //   const currentheme = themes == "system" ? systemTheme : themes;
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }

  return <>{true ? <MdLightMode /> : <MdDarkMode />}</>;
}
export default DarkModeSwitch;
