"use client";

import React, {useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineCloseCircle, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


import './navStyles.css'



const Nav = () => {

  const parentRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="fixed w-full h-20 shadow-xl z-[1000] bg-offWhite">
      <div className="flex justify-between items-center w-full h-full px-10 2xl-:px-16">
        <div>
            <Link href="/">
            <h1 className="text-3xl font-bold pl-5 darkGrey  uppercase hover:lightBlue relative">SC</h1>
            </Link>
        </div>
        <div>
        <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:lightBlue relative">
                Home
                <span className="underline"></span>
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-base uppercase hover:lightBlue relative">
                About
                <span className="underline"></span>
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-base uppercase hover:lightBlue relative">
                Projects
                <span className="underline"></span>
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-base uppercase hover:lightBlue relative">
                Contact
                <span className="underline"></span>
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
          <div
            className={`${
                navOpen
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ease-out duration-500 z-[500]"
                : "md:hidden fixed left-0 top-0 w-full h-screen bg-black/0 ease-out duration-500 z-[-1000]"
            }`}
            >
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
                    <h1 className="text-2xl md:text-4xl darkBlue font-bold pr-5">Scott Croin</h1>
                    {/* Close button  */}
                  {/* <div 
                    onClick={handleNav}
                    className="text-2xl darkBlue font-bold"
                    >
                    <AiOutlineCloseCircle />
                  </div> */}
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/" onClick={handleNav}>
                    <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">Home</li>
                  </Link>
                  <Link href="/about" onClick={handleNav}>
                    <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">About</li>
                  </Link>
                  <Link href="/projects" onClick={handleNav}>
                    <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">Projects</li>
                  </Link>
                  <Link href="/contact" onClick={handleNav}>
                    <li className="py-4 text-sm sm:text-base md:text-lg font-semibold">Contact</li>
                  </Link>
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
                        <FaGithub  />
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
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a target="_blank" rel="noopener" href='./pdf/Scott-Croin-Resume.pdf'>
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
    </div>
  );
};

export default Nav;
