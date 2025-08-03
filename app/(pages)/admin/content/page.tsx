'use server'

import { verifyAuthToken } from '@/app/actions/auth';
import { getHeaderData, getHeroData, getPageData } from '@/app/actions/cms';
import HeaderCms from "@/app/components/cms/HeaderCms";
import HeroCms from "@/app/components/cms/HeroCms";
import AboutMeCms from "@/app/components/cms/AboutMeCms";
import ProjectsCms from "@/app/components/cms/ProjectsCms";
import ExperienceCms from "@/app/components/cms/ExperienceCms";
import ContactCms from "@/app/components/cms/ContactCms";
import { redirect } from 'next/navigation';

const AdminContentPage = async () => {

    const { isValid } = await verifyAuthToken();

    if (!isValid) {
        redirect('/admin');
    }

    const pageData = await getPageData();

    console.log("page data", pageData)

    return (
        <main className="p-8 mt-16">
            <h1 className="h2 mb-4">Content Admin</h1>
            <HeaderCms initialData={pageData.data.header} />
            <HeroCms initialData={pageData.data.hero} />
            <AboutMeCms initialData={pageData.data.aboutMe} />
            <ProjectsCms initialData={pageData.data.projects} />
            <ExperienceCms initialData={pageData.data.experience} />
            <ContactCms />
        </main>
    );
};

export default AdminContentPage;