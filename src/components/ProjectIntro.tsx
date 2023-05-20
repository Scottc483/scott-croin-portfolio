import React from "react";
import Link from "next/link";
import ProjectCard from "./partials/ProjectCard";

const ProjectIntro = () => {
  return (
    <>
      <div className="flex flex-col p-16 max-w-5xl">
      <h2 className="text-xl sm:text-4xl md:text-2xl font-semi-bold mb-4 pl-6">
          Take a Look at my
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase pl-6">
          Projects
        </h2>
        <div className="flex flex-col">
          <ProjectCard
            title="Event Management Mobile App"
            description="An innovative mobile app built with React Native for efficient event management."
            link="/projects/#event-management"
            image=""
          />
          <ProjectCard
            title="Ticket Purchasing and Management Site"
            description="A convenient website developed with ASP.NET for easy ticket purchasing and management."
            link="/projects/#ticket-management"
            image=""
          />
          <ProjectCard
            title="Carbon Emissions Calculator"
            description="A user-friendly website to calculate carbon emissions for daily commutes."
            link="/projects/#carbon-calculator"
            image=""
          />
        </div>
          <div>
          <Link href="/projects" className="px-8 py-4 offWhite bg-darkGrey rounded-md font-semibold uppercase hover:bg-mediumGrey transition duration-300 mt-8">
          View All Projects
        </Link>
          </div>
      </div>
    </>
  );
};

export default ProjectIntro;
