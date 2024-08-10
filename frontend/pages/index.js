"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Cards from "./components/Cards";
import Swiper from "./components/Swiper";
import Gallery from "./components/Gallery";
// import Swiper2 from "./components/Swiper2";
import Swiper3 from "./components/Swiper3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    // window.location.reload();
  }, []);
  return (
    <>
      <Swiper3 />

      {/* <Cards /> */}
      <Swiper />
      <Gallery />
      {/* <Swiper2 /> */}
    </>
  );
}
