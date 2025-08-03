import Link from "next/link";
import SocialLinks from "@/app/components/global/SocialLinks";

const Header = ({ headerData }: { headerData: any }) => {

    return (
        <header
        className="fixed w-full backdrop-blur-md z-100">

            <div className='flex w-full max-w-[90rem] h-16 items-center justify-between m-auto'>
                <Link className='h3' href='/#'>{headerData?.siteTitle || 'kierenmcgill'}</Link>

                <SocialLinks githubLink={headerData?.githubLink} linkedinLink={headerData?.linkedinLink} />
            </div>

        </header>
    )
}

export default Header;