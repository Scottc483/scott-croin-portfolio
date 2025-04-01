import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 md:mx-20 m-5 max-w-3xl flex flex-1 justify-between flex-col md:flex-row items-start">
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
        <h1 className="text-2xl sm:text-4xl  font-bold mediumGrey my-2">
            About Me
          </h1>
          <p className="mb-4">
            <span className="text-lg font-semibold">
              I&apos;m a web developer from BC, Canada
            </span>
            , with a recent graduation from BCIT&apos;s Software Systems
            Developer program and a background as a sous chef for five years.
          </p>
          <p className="mb-4">
            This unique combination of experiences equips me with a diverse
            skill set in web development. With keen attention to detail and a
            passion for creating seamless user experiences, my goal is to design
            captivating websites that leave a lasting impact.
          </p>
          <p className="mb-4">
            If you&apos;re in need of a dedicated and innovative developer to
            bring your digital ideas to life, I&apos;m excited to connect and
            collaborate.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
