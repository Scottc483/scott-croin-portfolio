import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 md:mx-20 m-5 max-w-5xl flex flex-1 justify-between flex-col lg:flex-row items-start">
        <div className="w-full h-full flex items-center justify-center md:mr-5">
          <Image
            src="/scott-profile-1.jpg"
            alt="profile picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mediumGrey my-2">
            About Me
          </h1>
          <p className="mb-4">
            <span className="text-lg font-semibold">
              I&apos;m a full stack web developer from Vancouver, Canada
            </span>
            , with experience in React, .NET, and cloud technologies following
            my graduation from BCIT&apos;s Software Systems Developer program.
            Prior to tech, I worked as a Sous Chef, where I developed skills in
            team coordination, time management under pressure, and delivering
            quality results with precision - abilities that transfer seamlessly
            to web development projects.
          </p>
          <p className="mb-4">
            My background combines technical precision with creative thinking,
            allowing me to develop responsive applications and solve complex
            problems. I focus on building intuitive interfaces and robust
            backend systems that work seamlessly together to enhance user
            experiences.
          </p>
          <p className="mb-4">
            As both a developer and former Lab Assistant at BCIT, I&apos;ve developed
            strong collaboration skills and technical knowledge that I bring to
            every project. If you&apos;re looking for a developer who can turn
            concepts into functional, user-centered applications, I&apos;d be
            excited to discuss your project.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
