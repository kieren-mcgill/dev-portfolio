import gitHubIcon from '@/public/icons/github-fill.svg';
import linkedInIcon from '@/public/icons/linkedin-box-fill.svg';
import Image from 'next/image';

const SocialLinks = () => {

    return (
        <div className='flex gap-3'>

            <a href={'https://github.com/kieren-mcgill'}
               target="_blank"
               rel="noopener noreferrer"
            >
                <Image src={gitHubIcon} alt="GitHub" width={24} height={24} />
            </a>

            <a href={'https://www.linkedin.com/in/kacmcgill'}
               target="_blank"
               rel="noopener noreferrer"
            >
                <Image src={linkedInIcon} alt="LinkedIn" width={24} height={24} />
            </a>
        </div>
    )
}

export default SocialLinks;