import Image from "next/image";
import mockProjectImage from '@/public/images/thumbnail-project-5-large.webp'
import Button from "@/app/components/global/Button";

const ProjectCard = () => {

    return (
        <div className="relative group flex flex-col w-full h-full aspect-square">
                <Image
                    className="w-full h-4/5 object-cover"
                    src={mockProjectImage}
                    alt={"project-image"}
                    width={1080}
                    height={800}
                />
            <div className="flex flex-col justify-around grow uppercase">
                <h3>Design Portfolio</h3>
                <p>html css</p>
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
                        path={'/'}>
                        project
                    </Button>

                    <Button
                        type={'ext-link'}
                        path={'/'}>
                        code
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;