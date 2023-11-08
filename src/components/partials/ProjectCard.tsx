"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import RightNav from "react-multi-carousel";

interface ProjectCardProps {
  title: string;
  description: string | string[];
  githubLink?: string;
  liveLink?: string;
  otherLink?: string;
  image: string[] | string;
  technologies: string[];
  mobile: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
  otherLink,
  image,
  technologies,
  mobile,
}) => {
  useEffect(() => {}, []);

  const mobileResponsive = {
    desktop: {
      breakpoint: { max: 4000, min: 768 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    largeMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const desktopResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    largeMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide, totalItems },
    } = rest;
    console.log("current Slide", currentSlide);
    console.log("Number of slides", image.length);
    console.log("Number of Items", rest.carouselState.totalItems);
    const handleDotClick = (slideIndex: number) => {
      goToSlide(slideIndex);
    };

    return (
      <div className="carousel-button-group flex justify-between">
        <button
          className=" w-32 h-32 bg-black"
          onClick={() => previous()}
        ></button>
        <div className="carousel-dots">
          {Array.from(image, (_, index) => (
            <button
              key={index}
              className={`dot ${
                currentSlide === index ? "bg-black" : "bg-mediumGrey"
              } w-2 h-2 rounded-full  `}
              onClick={() => handleDotClick(index)}
            >
              TEST
            </button>
          ))}
        </div>
        <button className=" w-32 h-32 bg-black" onClick={() => next()}></button>
      </div>
    );
  };

  const imageClassName = mobile
    ? "w-[175px] md:w-[250px] lg:w-[500px] h-auto"
    : "w-auto h-auto";

  return (
    <div className=" shadow-lg rounded-lg md:p-6 mb-8 bg-gray-200">
      <div className="">
        {Array.isArray(image) ? (
          <Carousel
            responsive={mobile ? mobileResponsive : desktopResponsive}
            containerClass="py-8"
            dotListClass="custom-dot-list-style"
            itemClass="flex items-center justify-center"
            infinite={true}
            swipeable={true}
            removeArrowOnDeviceType={["largeMobile", "mobile"]}
            arrows={true}
            showDots={true}
            partialVisible={false}
            // customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            renderArrowsWhenDisabled={false}
          >
            {image.map((image, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center shadow-[0_0px_8px_0px_#656573] md:px-2 md:py-4 mx-5 h-full w-full max-w-xl hover:scale-105 transform transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className={imageClassName + " object-fill rounded-xl p-3"}
                  blurDataURL="data:..."
                  placeholder="blur"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex justify-center items-center mb-10 ">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center w-full items-center mt-6 px-5 md:px-10 ">
        <div className="max-w-2xl w-full">
          <div className="">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 uppercase">
              {title}
            </h3>
          </div>
          <div className="">
            <div className="text-gray-600 mb-4 text-sm">
              {Array.isArray(description) ? (
                description.map((desc, index) => (
                  <p key={index} className="mb-2">
                    {desc}
                  </p>
                ))
              ) : (
                <p> {description} </p>
              )}
            </div>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
            <ul className="flex flex-wrap justify-start ">
              {technologies.map((technology, index) => (
                <li key={index} className="pr-4 py-2 mr-2 mb-2">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col min-[400px]:flex-row justify-start items-start mb-5">
            {githubLink && (
              <Link
                href={githubLink}
                className="shadow-lg flex flex-row bg-darkGrey border border-gray-300  offWhite rounded-lg py-2 px-4 hover:bg-offWhite hover:darkGrey ease-in duration-150 mr-2 mt-2"
                target="_blank"
                rel="noopener"
              >
                <FaGithub className="text-2xl mr-2" />
                Repo
              </Link>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                className="shadow-lg flex flex-row bg-darkGrey border border-gray-300  offWhite rounded-lg py-2 px-4 hover:bg-offWhite hover:darkGrey ease-in duration-150 mr-2 mt-2"
                target="_blank"
                rel="noopener"
              >
                Live
              </Link>
            )}
            {otherLink && (
              <Link
                href={otherLink}
                className=" shadow-lg flex flex-row bg-darkGrey border border-gray-300  offWhite rounded-lg py-2 px-4 hover:bg-offWhite hover:darkGrey ease-in duration-150 mt-2"
                target="_blank"
                rel="noopener"
              >
                <FaInfoCircle className="text-2xl mr-2" />
                More Info
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
