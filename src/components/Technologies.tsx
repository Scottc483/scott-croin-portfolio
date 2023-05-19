'use client';

import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaAngular } from "react-icons/fa";
import Image from "next/image";
import "./technologies.css";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAmazonaws,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";
import {TfiHandPointRight} from "react-icons/tfi";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { BsFillBootstrapFill, BsGit } from "react-icons/bs";

import { SiDotnet } from "react-icons/si";

const Technologies = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementById("cards");
      if (cards) {
        const cardElements = Array.from(
          cards.getElementsByClassName("card")
        ) as HTMLElement[];
        for (const card of cardElements) {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    document
      .getElementById("cards")
      ?.addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .getElementById("cards")
        ?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="flex h-[900px] sm:h-[750px] md:h-[600px] mx-5 md:max-w-[1500px]">

        <div className="flex flex-1 flex-row h-full w-full gap-2 justify-center items-center">
        <div className="justify-center flex offWhite  pl-12 ">
          <div className="">
          
          <h3 className="uppercase text-s  mb-3">Check out my</h3>
          
          <h1 className="text-5xl uppercase  font-semibold items-center">Skills </h1>
          <TfiHandPointRight className="text-5xl mt-3"/>
          </div>
          
        </div>
          <div
            className="flex flex-wrap justify-center items-center gap-2 md:p-10 ml-10  md:w-2/3"
            id="cards"
          >
            
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <FaHtml5 className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">HTML</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <FaCss3Alt className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">CSS</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiJavascript className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">JavaScript</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiReact className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1 " />
                <div className="cardText">React</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiNodedotjs className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">Node.js</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiAmazonaws className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">AWS</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <FaAngular className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">Angular</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <BsGit className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">Git</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiDotnet className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">ASP.NET</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiTailwindcss className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">Tailwind CSS</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiBootstrap className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">Bootstrap</div>
              </div>
            </div>
            <div className="card bg-mediumGrey h-28 w-28 md:h-32 md:w-32 lg:w-36 lg:h-36">
              <div className="cardBorder"></div>
              <div className="cardContent">
                <SiMysql className="w-[50px] h-[50px] bg-offWhite rounded-lg p-1" />
                <div className="cardText">MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
