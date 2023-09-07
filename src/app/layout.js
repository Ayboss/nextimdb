"use client";

import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          {/* Header */}
          <Header />
          {/* Navbar */}
          {/* SearchBox */}
          {children}
        </body>
      </Provider>
    </html>
  );
}
