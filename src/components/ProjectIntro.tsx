import React from "react";
import Link from "next/link";
import ProjectCard from "./partials/ProjectCard";

const ProjectIntro = () => {
  return (
    <section className="w-full bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Take a look at my recent work
          </p>
        </div>
        
        <div className="space-y-24">
          <ProjectCard
            title="TeeTime"
            description={[
              "A mobile only application that allows users to register for golf tournaments based on the users eligibilty. Tournaments are created by a 'Host' user which during the creation process can set the eligibilty requirements for the tournament.", "When the user is registered for a tournament a QR code can be generated for the user to scan at the tournament to check in.",
            ]}
            githubLink="https://github.com/Scottc483/Event-Management-Mobile-App-BCIT-ISSP"
            images={[
              {
                url: "/projectImages/TeeTimeLogin.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeAdminDashboard.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeAdminCreateEvent.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeAdminCalendar.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeAttendance.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeUserQRCode.png",
                orientation: "portrait"
              },
              {
                url: "/projectImages/TeeTimeUserEvents.png",
                orientation: "portrait"
              },
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
            images={[
              {
                url: "/projectImages/FoodScapeHome.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/FoodScapeTicket.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/FoodScapeReviews.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/FoodScapeCreateUserReview.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/FoodScapeUserDashboard.png",
                orientation: "landscape"
              },
            ]}
            technologies={["ASP.NET", "C#", "SQL Server", "HTML", "CSS"]}
            mobile={false}
          />
          <ProjectCard
            title="EcoMute"
            description={["A user-friendly website to calculate carbon emissions for daily commutes.", "Users can input two locations into the map and the website will calculate the carbon emissions for the route. The user can also view the carbon emissions for the route by car, bus, or bike.", "The website was built for the MegaHack 2023 hackathon a 24 hour event where the theme was the UN's Sustainable Development Goals."]}
            githubLink="https://github.com/Scottc483/EcoMute-MegaHack-2023"
            otherLink="https://devpost.com/software/eco-mute"
            images={[
              {
                url: "/projectImages/EcoMuteHome.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/EcoMuteEmptyMap.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/EcoMuteFilledMap.png",
                orientation: "landscape"
              },
              {
                url: "/projectImages/EcoMuteRouteDetail.png",
                orientation: "landscape"
              },
            ]}
            technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
            mobile={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
