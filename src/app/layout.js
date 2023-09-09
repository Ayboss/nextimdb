import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <NavBar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </body>
      </Provider>
    </html>
  );
}
