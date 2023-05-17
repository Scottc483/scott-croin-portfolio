"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import KUTE from "kute.js";
import DrawBlob, { BlobType } from "blob-animated";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const blobelement = document.getElementById(
      "canvasExample"
    ) as HTMLCanvasElement;
    const heroImage = document.getElementById("heroImage") as HTMLImageElement;

    const Blob = new DrawBlob({
      canvas: blobelement,
      speed: 400,
      scramble: 0.1,
      maskedElement: heroImage,
    });
  }, []);

  return (
    <>
      <section className=" flex flex-1 mx-auto pt-20 bg-offWhite justify-center overflow-hidden h-full ">
        <div className="flex justify-center relative">
          <img
            id="heroImage"
            src="/forest.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="hidden"
            loading="eager"
          />
          <canvas
            id="canvasExample"
            className="w-full max-w-3xl xl:max-w-4xl"
          />
          <div className="z-[100] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl  offWhite font-semibold">
              Hi, my name is
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold offWhite my-2">
              Scott Croin.
            </h1>
            <h2 className="text-base sm:text-lg md:text-2xl  offWhite font-semibold">
              I build things for the web.
            </h2>
            <div className="flex items-center flex-col">
              <div className="flex items-center justify-between my-4 w-full">
                <div className="rounded-full shadow-sm shadow-gray-400 p-3 bg-offWhite cursor-pointer hover:scale-110 ease-in duration-200 mr-1">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/in/scott-croin/"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-sm shadow-gray-400 p-3 bg-offWhite cursor-pointer hover:scale-110 ease-in duration-200 mr-1">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Scottc483"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div
                  className="rounded-full shadow-sm shadow-gray-400 p-3 bg-offWhite cursor-pointer hover:scale-110 ease-in duration-200"
                  onClick={() =>
                    (window.location.href = "mailto:scottcroin.dev@gmail.com")
                  }
                >
                  <AiOutlineMail />
                </div>
              </div>
              <div className="w-1/2 rounded-full shadow-sm shadow-gray-400 p-3 bg-offWhite font-semibold cursor-pointer hover:scale-110 ease-in duration-200 flex flex-row justify-space items-center">
                <div>
                  <BsFillPersonLinesFill />
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="./pdf/Scott-Croin-Resume.pdf"
                    className="uppercase pl-[0.85rem]"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center shapedividers_com-3195"></section>
    </>
  );
}
