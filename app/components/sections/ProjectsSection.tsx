import Section from "@/app/components/global/Section";

const ProjectsSection = () => {

    return (
        <Section
            sectionClass='py-lg'
            title={"Projects"}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-green w-full aspect-3/2"></div>
                <div className="bg-green w-full aspect-3/2"></div>
                <div className="bg-green w-full aspect-3/2"></div>

            </div>
        </Section>
    )
}

export default ProjectsSection;