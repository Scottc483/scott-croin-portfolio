"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import KUTE from "kute.js";
import DrawBlob, { BlobType } from "blob-animated";

export default function Home() {

  useEffect(() => {
    const canvas = document.getElementById("canvasExample") as HTMLCanvasElement;
    const heroImage = document.getElementById("heroImage") as HTMLImageElement;

 
      const Blob = new DrawBlob({
        canvas: canvas,
        speed: 500,
        scramble: 0.1,
        maskedElement: heroImage,
        // color: "#034001",
      });
    
  }, []);


  return (
    <>
      <section className=" flex flex-1 mx-auto pt-20 bg-offWhite justify-center overflow-hidden h-full ">
        <div className="flex justify-center relative">
          <Image
            id="heroImage"
            src={'/bridgeImage.jpg'}
            alt="Picture of the author"
            width={500}
            height={500}
            className="hidden"
            onError={(e) => console.log("Error Loading Image", e)}
          />
          <canvas id="canvasExample" className="w-full max-w-2xl" />
          <div className="z-[100] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl offWhite font-semibold">Hi, my name is</h2>
            <h1 className="text-4xl font-bold offWhite my-2">
              Scott Croin.
            </h1>
            <h2 className="text-lg offWhite font-semibold">
              I build things for the web.
            </h2>
          </div>
        </div>
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center shapedividers_com-3195"></section>
    </>
  );
}