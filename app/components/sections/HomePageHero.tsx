import Section from "@/app/components/global/Section";
import Image from "next/image";
import bgOvals from '@/public/images/bg-ovals.svg';
import Button from "@/app/components/global/Button";

const HomePageHero = () => {

    return (
        <Section
            sectionClass='h-screen'
            innerClass='relative flex flex-col justify-center items-start h-full gap-8 lg:gap-12'
        >
            <Image
                className='absolute top-20 -left-24'
                src={bgOvals}
                alt={'background ovals'}
            />

            <div>
                <h1>Nice to meet you!</h1>
                <h1>I'm <span className='underline decoration-green underline-offset-16'>Kieren McGill</span>
                </h1>
            </div>

            <p className='max-w-[80vw]'>I'm a software and web developer based in Sheffield, UK</p>

            <Button type={'link'}>contact me</Button>
        </Section>
    )
}

export default HomePageHero;