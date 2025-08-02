import HomePageHero from "@/app/components/sections/HomePageHero";
import AboutMeSection from "@/app/components/sections/AboutMeSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
      <>
        <HomePageHero/>
        <AboutMeSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
      </>
  );
}
