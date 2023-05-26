import React from "react";
import Link from "next/link";
import ProjectCard from "./partials/ProjectCard";

const ProjectIntro = () => {
  return (
    <>
      <div className="flex flex-col p-5 md:p-16 max-w-6xl w-full">
        <h2 className="text-base sm:text-lg  md:text-xl font-semi-bold mb-4 pl-6">
          Take a Look at my
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase pl-6">
          Projects
        </h2>
        <div className="flex flex-col">
          <ProjectCard
            title="TeeTime"
            description={[
              "A mobile only application that allows users to register for golf tournaments based on the users eligibilty. Tournaments are created by a 'Host' user which during the creation process can set the eligibilty requirements for the tournament.", "When the user is registered for a tournament a QR code can be generated for the user to scan at the tournament to check in.",
            ]}
            githubLink="https://github.com/Scottc483/Event-Management-Mobile-App-BCIT-ISSP"
            image={[
              "/projectImages/TeeTimeLogin.png",
              "/projectImages/TeeTimeAdminDashboard.png",
              "/projectImages/TeeTimeAdminCreateEvent.png",
              "/projectImages/TeeTimeAdminCalendar.png",
              "/projectImages/TeeTimeAttendance.png",
              "/projectImages/TeeTimeUserQRCode.png",
              "/projectImages/TeeTimeUserEvents.png",
            ]}
            technologies={[
              "React Native",
              "Javascript",
              "AWS Amplify",
              "SST",
              "CockroachDB",
            ]}
            mobile={true}
          />
          <ProjectCard
            title="FoodScape"
            description={["A convenient website developed with ASP.NET for easy ticket purchasing and management.", "The user can view festival information and pricing, but can only purchase tickets once self registered. Once confirmed the user can add tickets to their cart and complete the purchase using paypal."]}
            githubLink="https://github.com/Scottc483/FoodScape-Internal-BCIT-Project"
            image={[
              "/projectImages/FoodScapeHome.png",
              "/projectImages/FoodScapeTicket.png",
              "/projectImages/FoodScapeReviews.png",
              "/projectImages/FoodScapeCreateUserReview.png",
              "/projectImages/FoodScapeUserDashboard.png",
            ]}
            technologies={["ASP.NET", "C#", "SQL Server", "HTML", "CSS"]}
            mobile={false}
          />
          <ProjectCard
            title="EcoMute"
            description={["A user-friendly website to calculate carbon emissions for daily commutes.", "Users can input two locations into the map and the website will calculate the carbon emissions for the route. The user can also view the carbon emissions for the route by car, bus, or bike.", "The website was built for the MegaHack 2023 hackathon a 24 hour event where the theme was the UN's Sustainable Development Goals."]}
            githubLink="https://github.com/Scottc483/EcoMute-MegaHack-2023"
            otherLink="https://devpost.com/software/eco-mute"
            image={["/projectImages/EcoMuteHome.png", "/projectImages/EcoMuteEmptyMap.png", "/projectImages/EcoMuteFilledMap.png", "/projectImages/EcoMuteRouteDetail.png"]}
            technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
            mobile={false}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectIntro;
