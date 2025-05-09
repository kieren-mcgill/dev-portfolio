import Link from "next/link";
import SocialLinks from "@/app/components/global/SocialLinks";

const Header = () => {

    return (
        <header
        className="m-auto max-w-[90rem]">

            <div className='flex w-full h-16 items-center justify-between'>
                <Link className='h3' href='/#'>kierenmcgill</Link>

                <SocialLinks/>
            </div>

        </header>
    )
}

export default Header;