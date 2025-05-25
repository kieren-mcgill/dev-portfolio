import Section from "@/app/components/global/Section";
import ProjectCard from "@/app/components/ProjectCard";

const ProjectsSection = () => {

    return (
        <Section
            sectionClass='py-lg'
            title={"Projects"}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </div>
        </Section>
    )
}

export default ProjectsSection;