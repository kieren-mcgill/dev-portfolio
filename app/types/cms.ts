export interface HeaderData {
    siteTitle: string;
    githubLink: string;
    linkedinLink: string;
}

export interface HeroData {
    greeting: string;
    name: string;
    tagline: string;
    buttonText: string;
    buttonPath: string;
}

export interface AboutMeData {
    aboutMeText: string;
    profilePicUrl: string;
    cvButtonText: string;
    cvButtonPath: string;
}

export interface Project {
    title: string;
    technologies: string;
    projectLink: string;
    codeLink: string;
    imageUrl: string;
}

export interface ProjectsData {
    projects: Project[];
}

export interface Experience {
    company: string;
    title: string;
    dates: string;
    duties: string;
}

export interface ExperienceData {
    experiences: Experience[];
}

export interface PageData {
    header: HeaderData | null;
    hero: HeroData | null;
    aboutMe: AboutMeData | null;
    projects: ProjectsData | null;
    experience: ExperienceData | null;
}

// Type for the return of getSingleDoc
export type DocResult<T> = {
    success: boolean;
    data: T | null;
    error?: string;
};

// Type for the return of getPageData
export type PageDataResult = {
    success: boolean;
    data: PageData;
    error?: string;
}
