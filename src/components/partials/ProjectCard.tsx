import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image?: string;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
  return (

    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="px-4 py-2 bg-darkGrey offWhite rounded-md font-semibold uppercase hover:bg-mediumGrey transition duration-300">
          Learn More
      </Link>
    </div>
    )
};

export default ProjectCard