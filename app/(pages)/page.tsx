import HomePageHero from "@/app/components/sections/HomePageHero";
import AboutMeSection from "@/app/components/sections/AboutMeSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
// import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ContactSection from "@/app/components/sections/ContactSection";
import { getPageData } from '@/app/actions/cms';


export default async function Home() {

  const pageData = await getPageData();

  return (
      <>
        <HomePageHero heroData={pageData.data.hero}/>
        <AboutMeSection aboutMeData={pageData.data.aboutMe} />
        <ExperienceSection experienceData={pageData.data.experience} />
        {/*<ProjectsSection projectsData={pageData.data.projects} />*/}
        <ContactSection/>
      </>
  );
}
