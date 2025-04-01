"use client";

import React, { useEffect } from "react";
import DrawBlob, { BlobType } from "blob-animated";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window loaded");
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }

    const blobelement = document.getElementById(
      "canvasExample"
    ) as HTMLCanvasElement;
    const heroImage = document.getElementById("heroImage") as HTMLImageElement;

    const Blob = new DrawBlob({
      canvas: blobelement,
      speed: 600,
      scramble: 0.1,
      maskedElement: heroImage,
    });

    // const handleParallax = () => {
    //   const scrollY = window.scrollY;
    //   if (heroImage) {
    //     blobelement.style.transform = `translateY(${scrollY * 0.1}px)`;
    //   }
    // };

    // window.addEventListener("scroll", handleParallax);

    // return () => {
    //   window.removeEventListener("scroll", handleParallax);
    // };
  }, []);

  return (
    <div className="flex justify-center relative">
      <div>
        <Image
          id="heroImage"
          src="/forest.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="hidden"
          priority
        />
        <canvas id="canvasExample" className="w-full max-w-3xl xl:max-w-4xl" />
      </div>
      <div className="z-[100] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl  offWhite font-semibold">
          Hi, my name is
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold offWhite my-2">
          Scott Croin
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl  offWhite font-semibold">
          I build things for the web.
        </h2>
        <div className="hidden md:flex w-full justify-start pt-10">
          <a
            target="_blank"
            rel="noopener"
            href="./pdf/Scott-Croin-Resume.pdf"
            className="uppercase px-3 py-2 justify-center flex flex-row items-center w-1/2 rounded-full hover:shadow-[0_0px_8px_0px_#ffffff] bg-offWhite font-semibold cursor-pointer ease-in duration-300  justify-space "
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
