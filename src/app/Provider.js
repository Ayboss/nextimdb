"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

function Provider({ children }) {
  return <>{children}</>;
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}

export default Provider;
