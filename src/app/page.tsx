import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Intro from "@/components/Intro";
import ProjectIntro from "@/components/ProjectIntro";
import ContactIntro from "@/components/ContactIntro";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-1 mx-auto pt-20 bg-offWhite justify-center overflow-hidden h-full z-[100]"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center h-auto pb-[10rem] z-[100]"
      >
        <Intro />
      </section>
      <section
        id="skills"
        className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center  z-[100]"
      >
        <Technologies />
      </section>
      <section
        id="projects"
        className="flex flex-1 mx-auto pt-[10rem] bg-offWhite justify-center shapedividers_com-2059 z-[100]"
      >
        <ProjectIntro />
      </section>
      <section
        id="contact"
        className="flex flex-1 mx-auto pt-[10rem] bg-darkGrey justify-center relative z-[100] shapedividers_com-7110"
      >
        <ContactIntro />
      </section>
      <Analytics />
    </>
  );
}
