import Section from "@/app/components/global/Section";
import Image from 'next/image';
import profilePic from '@/public/images/kacm_profile-pic.png';
import Button from "@/app/components/global/Button";
import type { AboutMeData } from '@/app/types/cms';

const AboutMeSection = ({ aboutMeData }: { aboutMeData: AboutMeData | null }) => {

    const {aboutMeText} = aboutMeData ?? {};
    const mainText  = aboutMeText?.split('\r\n').filter(paragraph => paragraph.trim() !== '');

    return (
        <Section
            sectionClass='pt-lg pb-xl bg-grey-dark'
            innerClass='mb-12 lg:mb-0'
            title={"About me"}
        >

            <div className='flex flex-col-reverse sm:flex-row gap-6 items-center sm:items-start mb-8 lg:mg-12'>
                <div>
                    {
                        mainText?.length &&
                        mainText.map((line, i) =>
                        <p className={'mb-2'} key={`about-me-line-${i}`}>{line}</p>
                        )
                    }
                </div>

                <Image
                    className='shrink-0 w-64 h-64'
                    src={aboutMeData?.profilePicUrl || profilePic}
                    alt='profile pic'
                    height={1080}
                    width={1080}
                />
            </div>


            <Button
                type={'ext-link'}
                path={aboutMeData?.cvButtonPath || '/docs/CV_Kieren_McGill.pdf'}
            >
                {aboutMeData?.cvButtonText || 'View my CV'}
            </Button>

        </Section>
    )
}

export default AboutMeSection;