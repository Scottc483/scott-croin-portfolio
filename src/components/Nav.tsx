"use client";

import React, { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import "./nav.css";

const Nav = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [navDetach, setNavDetach] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      parentRef.current &&
      parentRef.current !== event.target &&
      !parentRef.current.contains(event.target as Node)
    ) {
      setNavOpen(false);
    }
  };

  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || html.clientHeight) + element.offsetHeight &&
      rect.right <=
        (window.innerWidth || html.clientWidth) + element.offsetWidth
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      currentPosition > 0 ? setNavDetach(true) : setNavDetach(false);
      currentPosition >= 848
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
      setScrollPosition(currentPosition);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <div
        id="navBar"
        className={`fixed top-0 w-full h-20  z-[1000] transition-all ${
          navDetach
            ? "shadow-md bg-green-200 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-100"
            : "bg-offWhite"
        } '`}
      >
        <div className="flex justify-between items-center w-full h-full px-10 2xl-:px-16">
          <div>
            <button onClick={() => scrollTo("home")}>
              <h1 className="text-3xl font-bold pl-5 darkGrey  uppercase hover:lightBlue relative">
                SC
              </h1>
            </button>
          </div>
          <div>
            <ul className="hidden md:flex ">
              <button onClick={() => scrollTo("home")}>
                <li className="ml-10 text-base uppercase hover:lightBlue relative font-semibold">
                  Home
                  <span className="underline"></span>
                </li>
              </button>
              <button onClick={() => scrollTo("about")}>
                <li className="ml-10 text-base uppercase hover:lightBlue relative font-semibold">
                  About
                  <span className="underline"></span>
                </li>
              </button>
              <button onClick={() => scrollTo("skills")}>
                <li className="ml-10 text-base uppercase hover:lightBlue relative font-semibold">
                  Skills
                  <span className="underline"></span>
                </li>
              </button>
              <button onClick={() => scrollTo("projects")}>
                <li className="ml-10 text-base uppercase hover:lightBlue relative font-semibold">
                  Projects
                  <span className="underline"></span>
                </li>
              </button>
              <button onClick={() => scrollTo("contact")}>
                <li className="ml-10 text-base uppercase hover:lightBlue relative font-semibold">
                  Contact
                  <span className="underline"></span>
                </li>
              </button>
            </ul>
            <div
              onClick={handleNav}
              className={`${navOpen ? "pointer-events-none" : "md:hidden"}`}
            >
              <AiOutlineMenu size={25} />
            </div>
            <div>
              <div
                className={`${
                  navOpen
                    ? "  md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ease-out duration-300 z-[500] pointer-events-none"
                    : "  md:hidden fixed left-0 top-0 w-full h-screen bg-black/0 ease-out duration-300 z-[-1000] pointer-events-none"
                }`}
              ></div>
              <div
                className={`${
                  navOpen
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-[1000] "
                    : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500 "
                }`}
                ref={parentRef}
              >
                <div>
                  <div className="flex w-full items-center justify-between">
                    <h1 className="text-2xl md:text-4xl darkBlue font-bold pr-5">
                      Scott Croin
                    </h1>
                  </div>
                </div>
                <div className="py-4 ">
                  <ul className="uppercase flex flex-col items-start">
                    <button onClick={() => scrollTo("home")}>
                      <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">
                        Home
                      </li>
                    </button>
                    <button onClick={() => scrollTo("about")}>
                      <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">
                        About
                      </li>
                    </button>
                    <button onClick={() => scrollTo("skills")}>
                      <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">
                        Skills
                      </li>
                    </button>
                    <button onClick={() => scrollTo("projects")}>
                      <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">
                        Projects
                      </li>
                    </button>
                    <button onClick={() => scrollTo("contact")}>
                      <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">
                        Contact
                      </li>
                    </button>
                  </ul>
                  <div className="pt-[20%] flex-1">
                    <p className="tracking-widest uppercase darkBlue border-b border-gray-400 my-4 font-semibold text-sm sm:text-lg">
                      Connect With Me
                    </p>
                    <div className="flex items-center justify-between my-4 w-full  pt-[10%]">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 mr-1">
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://www.linkedin.com/in/scott-croin/"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 mr-1">
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://github.com/Scottc483"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 mr-1"
                        onClick={() =>
                          (window.location.href =
                            "mailto:scottcroin.dev@gmail.com")
                        }
                      >
                        <AiOutlineMail />
                      </div>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="./pdf/Scott-Croin-Resume.pdf"
                      >
                        <BsFillPersonLinesFill />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[70vh] right-0 hidden md:flex flex-col justify-center z-[1000]">
        <div className="lg:mr-5">
          <div className="flex flex-col items-center justify-center w-full mr-10  py-5">
            <div className="rounded-full bg-offWhite shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:offWhite hover:bg-darkGrey ease-in duration-150">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/scott-croin/"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full bg-offWhite shadow-md mt-3 shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:offWhite hover:bg-darkGrey ease-in duration-150">
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/Scottc483"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full bg-offWhite shadow-md mt-3 shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:offWhite hover:bg-darkGrey ease-in duration-150">
              <a
                target="_blank"
                rel="noopener"
                href="mailto:scottcroin.dev@gmail.com"
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="mt-5">
              {showScrollButton && (
                <button
                  className="rounded-full bg-offWhite shadow-md mt-3 shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:offWhite hover:bg-darkGrey ease-in duration-300"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <AiOutlineArrowUp />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
