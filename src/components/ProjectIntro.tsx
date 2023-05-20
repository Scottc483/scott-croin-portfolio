import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <>
      <div className="flex flex-col   p-16 max-w-5xl">
        <h2 className="text-xl sm:text-4xl md:text-2xl font-semi-bold mb-4">
          Take a Look at my
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase">
          Projects
        </h2>
        <p className="text-lg mb-8">
        Explore a collection of my projects, including an Event Management mobile app, a Ticket Purchasing and Management site, and a Carbon Emissions Calculator for daily commutes. Visit my projects page to learn more.

        </p>
        <div className="">
        <Link
          href="/projects"
          className="px-8 py-3 offWhite bg-darkGrey text-xs rounded-md font-semibold uppercase transition duration-300"
        >
          View Projects
        </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectIntro;
