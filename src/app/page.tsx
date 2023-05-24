"use client";

import Image from "next/image";
import { useEffect, useState, Suspense, useRef } from "react";
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
import { Analytics } from '@vercel/analytics/react';

useEffect(() => {
  
}, []);


export default function Home() {
 
  return (
    <>
      <section id="home" className="flex flex-1 mx-auto pt-20 bg-offWhite justify-center overflow-hidden h-full z-[100]">
        <Hero />
      </section>
      <section id="about" className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center h-auto pb-[10rem] z-[100]">
        <Intro />
      </section>
      <section id="skills" className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center shapedividers_com-3195 z-[100]">
        <Technologies />
      </section>
      <section id="projects" className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center shapedividers_com-2059 z-[100]">
        <ProjectIntro />
      </section>
      <section id="contact" className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center relative z-[100] shapedividers_com-7110">
        <div className="">

        </div>
        <ContactIntro />
      </section>
      <Analytics />
    </>
  );
}
