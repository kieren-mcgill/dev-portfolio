import Image from "next/image";
import Button from "@/app/components/global/Button";
import { Project } from '@/app/types/cms';

const ProjectCard = ({ project }: { project: Project }) => {

    return (
        <div className="relative group flex flex-col w-full h-full aspect-square">
                <Image
                    className="w-full h-4/5 object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                    width={1080}
                    height={800}
                />
            <div className="flex flex-col justify-around grow uppercase">
                <h3>{project.title}</h3>
                <p>{project.technologies}</p>
                <div
                    className={`
                    flex gap-6
                    lg:flex-col lg:gap-12
                    lg:hidden lg:group-hover:flex
                    lg:absolute top-0 left-0 lg:w-full lg:h-4/5 lg:items-center lg:justify-center
                    lg:group-hover:bg-grey-dark/75
                    `}
                >
                    <Button
                        type={'ext-link'}
                        path={project.projectLink}>
                        project
                    </Button>

                    <Button
                        type={'ext-link'}
                        path={project.codeLink}>
                        code
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;