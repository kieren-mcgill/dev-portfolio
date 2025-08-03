import Section from "@/app/components/global/Section";
import ProjectCard from "@/app/components/ProjectCard";

const ProjectsSection = ({ projectsData }: { projectsData: any[] }) => {

    return (
        <Section
            sectionClass='py-lg'
            title={"Projects"}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projectsData && projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection;