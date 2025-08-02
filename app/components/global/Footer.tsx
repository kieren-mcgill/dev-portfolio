import SocialLinks from "@/app/components/global/SocialLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full">
            <div className='flex flex-col w-full max-w-[90rem] h-24 items-center justify-center m-auto gap-4'>
                <div className="flex w-full justify-between items-center">
                    <p>&copy; {currentYear} Kieren McGill</p>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
