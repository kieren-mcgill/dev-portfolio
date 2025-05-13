import Section from "@/app/components/global/Section";
import Image from 'next/image';
import profilePic from '@/public/images/kacm_profile-pic.png';

const AboutMeSection = () => {

    return (
        <Section sectionClass='py-lg bg-grey-dark'>
            <h2 className="h1 mb-lg">About me</h2>

            <div className='flex flex-col-reverse sm:flex-row gap-6 items-center sm:items-start'>
                <div>
                    <p className='mb-4'>I’m a software developer based in Sheffield, specializing in JavaScript/Typescript, especially React, React Native, and Node.js/Express for backend - but I know my way around PHP too. I love building beautiful user-friendly applications and to continuously refine my skills to stay at the forefront of software web development.</p>
                    <p className='mb-4'>Before moving into tech, I had a great career in education, working in various leadership roles across multiple countries. I became an educator because of my love for learning—something that still drives me as a developer. Whether it’s exploring AI integration, experimenting with 3D web development, or just getting better at writing clean, efficient code, I enjoy the challenge of always improving and staying curious.</p>
                </div>

                <Image
                    className='shrink-0 w-64 h-64'
                    src={profilePic}
                    alt='profile pic'
                    height={1080}
                    width={1080}
                />
            </div>

        </Section>
    )
}

export default AboutMeSection;