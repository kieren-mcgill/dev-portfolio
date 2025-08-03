'use server';

import { adminDb } from '@/lib/firebase/firebase-admin';

const updateSingleDoc = async (collectionName: string, data: any) => {
  try {
    await adminDb.collection(collectionName).doc('main').set(data, { merge: true });
    return { success: true };
  } catch (error) {
    console.error(`Error updating ${collectionName} data:`, error);
    return { success: false, error: `Failed to update ${collectionName} data.` };
  }
};

const getSingleDoc = async (collectionName: string) => {
  try {
    const doc = await adminDb.collection(collectionName).doc('main').get();
    if (doc.exists) {
      return { success: true, data: doc.data() };
    }
    return { success: true, data: null };
  } catch (error) {
    console.error(`Error fetching ${collectionName} data:`, error);
    return { success: false, error: `Failed to fetch ${collectionName} data.` };
  }
};


// --- Exported Functions ---

export const updateHeaderData = async (formData: FormData) => {
  const data = {
    siteTitle: formData.get('siteTitle') as string,
    githubLink: formData.get('githubLink') as string,
    linkedinLink: formData.get('linkedinLink') as string,
  };
  return updateSingleDoc('header', data);
};

export const getHeaderData = async () => {
  return getSingleDoc('header');
};

export const updateHeroData = async (formData: FormData) => {
  const data = {
    greeting: formData.get('greeting') as string,
    name: formData.get('name') as string,
    tagline: formData.get('tagline') as string,
    buttonText: formData.get('buttonText') as string,
    buttonPath: formData.get('buttonPath') as string,
  };
  return updateSingleDoc('hero', data);
};

export const getHeroData = async () => {
  return getSingleDoc('hero');
};

export const updateAboutMeData = async (formData: FormData) => {
  const data = {
    aboutMeText: formData.get('aboutMeText') as string,
    profilePicUrl: formData.get('profilePicUrl') as string,
    cvButtonText: formData.get('cvButtonText') as string,
    cvButtonPath: formData.get('cvButtonPath') as string,
  };
  return updateSingleDoc('aboutMe', data);
};

export const updateProjectsData = async (formData: FormData) => {
  const projects = [];
  let i = 0;
  while (formData.get(`projectTitle-${i}`)) {
    projects.push({
      title: formData.get(`projectTitle-${i}`) as string,
      technologies: formData.get(`projectTechnologies-${i}`) as string,
      projectLink: formData.get(`projectProjectLink-${i}`) as string,
      codeLink: formData.get(`projectCodeLink-${i}`) as string,
      imageUrl: formData.get(`projectImageUrl-${i}`) as string,
    });
    i++;
  }

  try {
    await adminDb.collection('projects').doc('main').set({ projects });
    return { success: true };
  } catch (error) {
    console.error('Error updating projects data:', error);
    return { success: false, error: 'Failed to update projects data.' };
  }
};

export const updateExperienceData = async (formData: FormData) => {
  const experiences = [];
  let i = 0;
  while (formData.get(`experienceCompany-${i}`)) {
    experiences.push({
      company: formData.get(`experienceCompany-${i}`) as string,
      title: formData.get(`experienceTitle-${i}`) as string,
      dates: formData.get(`experienceDates-${i}`) as string,
      duties: formData.get(`experienceDuties-${i}`) as string,
    });
    i++;
  }

  try {
    await adminDb.collection('experience').doc('main').set({ experiences });
    return { success: true };
  } catch (error) {
    console.error('Error updating experience data:', error);
    return { success: false, error: 'Failed to update experience data.' };
  }
};

export const getPageData = async () => {
  try {
    const [headerResult, heroResult, aboutMeResult, projectsResult, experienceResult] = await Promise.all([
      getSingleDoc('header'),
      getSingleDoc('hero'),
      getSingleDoc('aboutMe'),
      getSingleDoc('projects'),
      getSingleDoc('experience')
    ]);

    return {
      success: true,
      data: {
        header: headerResult.data,
        hero: heroResult.data,
        aboutMe: aboutMeResult.data,
        projects: projectsResult.data,
        experience: experienceResult.data,
      }
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return { success: false, error: 'Failed to fetch page data.' };
  }
};