"use client";

import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import KUTE from "kute.js";
import DrawBlob, { BlobType } from "blob-animated";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Intro from "@/components/Intro";
import ProjectIntro from "@/components/ProjectIntro";
import ContactIntro from "@/components/ContactIntro";

export default function Home() {
  return (
    <>
      <section className="flex flex-1 mx-auto pt-20 bg-offWhite justify-center overflow-hidden h-full ">
        <Hero />
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center h-auto pb-[10rem] ">
        <Intro />
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center shapedividers_com-3195 ">
        <Technologies />
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center shapedividers_com-5732">
        <ProjectIntro />
      </section>
      <section className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center relative">
        <div className="custom-shape-divider-top-1684535873">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill fill-[#F0F0F2]"
            ></path>
          </svg>
        </div>
        <ContactIntro />
      </section>
    </>
  );
}
