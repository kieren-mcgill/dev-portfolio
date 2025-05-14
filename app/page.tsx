import HomePageHero from "@/app/components/sections/HomePageHero";
import AboutMeSection from "@/app/components/sections/AboutMeSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";

export default function Home() {
  return (
      <>
        <HomePageHero/>
        <AboutMeSection/>
        <ProjectsSection/>
      </>
  );
}
