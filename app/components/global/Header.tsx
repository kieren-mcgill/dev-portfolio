import Link from "next/link";
import SocialLinks from "@/app/components/global/SocialLinks";

const Header = () => {

    return (
        <header
        className="fixed w-full backdrop-blur-md z-100">

            <div className='flex w-full max-w-[90rem] h-16 items-center justify-between'>
                <Link className='h3' href='/#'>kierenmcgill</Link>

                <SocialLinks/>
            </div>

        </header>
    )
}

export default Header;