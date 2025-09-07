'use client';

import { useState, useActionState } from 'react';
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import { updateProjectsData } from '@/app/actions/cms';
import { generateRandomId } from '@/app/utils/idGenerator';
import Form from "next/form";
import { Project, ProjectsData, CmsDataState } from '@/app/types/cms';

const initialState: CmsDataState = {
    success: null,
    error: undefined,
};

const ProjectsCms = ({ initialData }: { initialData: ProjectsData | null }) => {
    const [projects, setProjects] = useState<Project[]>(initialData?.projects || []);
    const [state, formAction] = useActionState<CmsDataState, FormData>(
        updateProjectsData,
        initialState
    );

    const addProject = () => {
        setProjects([...projects, { id: generateRandomId(), title: '', technologies: '', projectLink: '', codeLink: '', imageUrl: '' }]);
    };

    const removeProject = (id: number) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <CmsSectionContainer title={"Projects"}>
            <Form className="flex flex-col gap-4" action={formAction}>
                {projects.map((project, index) => (
                    <div key={project.id} className="border border-gray-600 p-4 rounded-md mb-4">
                        <h3 className="text-lg font-semibold mb-2">Project {index + 1}</h3>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <FormInput
                                type={'text'}
                                id={`projectTitle-${index}`}
                                name={`projectTitle-${index}`}
                                label={'Project Title'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={project.title}
                            />
                            <FormInput
                                type={'text'}
                                id={`projectTechnologies-${index}`}
                                name={`projectTechnologies-${index}`}
                                label={'Technologies'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={project.technologies}
                            />
                            <FormInput
                                type={'text'}
                                id={`projectProjectLink-${index}`}
                                name={`projectProjectLink-${index}`}
                                label={'Project Link'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={project.projectLink}
                            />
                            <FormInput
                                type={'text'}
                                id={`projectCodeLink-${index}`}
                                name={`projectCodeLink-${index}`}
                                label={'Code Link'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={project.codeLink}
                            />
                            <FormInput
                                type={'text'}
                                id={`projectImageUrl-${index}`}
                                name={`projectImageUrl-${index}`}
                                label={'Image URL'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={project.imageUrl}
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="button" onClick={() => removeProject(project.id)}>Remove</Button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-start mt-4">
                    <Button type="button" onClick={addProject}>Add</Button>
                </div>
                {state.success !== null && (
                    <p className={`p-4 rounded-md ${state.success ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                        {state.success ? 'Data updated successfully!' : `Error: ${state.error}`}
                    </p>
                )}
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </CmsSectionContainer>
    );
};

export default ProjectsCms;

// 'use client';
//
// import { useState } from 'react';
// import FormInput from "@/app/components/FormInput";
// import Button from "@/app/components/global/Button";
// import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
// import { updateProjectsData } from '@/app/actions/cms';
// import { generateRandomId } from '@/app/utils/idGenerator';
// import Form from "next/form";
// import { Project, ProjectsData } from '@/app/types/cms';
//
// const ProjectsCms = ({ initialData }: { initialData: ProjectsData | null }) => {
//     const [projects, setProjects] = useState<Project[]>(initialData?.projects || []);
//
//     const addProject = () => {
//         setProjects([...projects, { id: generateRandomId(), title: '', technologies: '', projectLink: '', codeLink: '', imageUrl: '' }]);
//     };
//
//     const removeProject = (id: number) => {
//         setProjects(projects.filter((project) => project.id !== id));
//     };
//
//     return (
//         <CmsSectionContainer title={"Projects"}>
//             <Form className="flex flex-col gap-4" action={updateProjectsData}>
//                 {projects.map((project, index) => (
//                     <div key={project.id} className="border border-gray-600 p-4 rounded-md mb-4">
//                         <h3 className="text-lg font-semibold mb-2">Project {index + 1}</h3>
//                         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//                             <FormInput
//                                 type={'text'}
//                                 id={`projectTitle-${index}`}
//                                 name={`projectTitle-${index}`}
//                                 label={'Project Title'}
//                                 isUppercase={false}
//                                 error={undefined}
//                                 defaultValue={project.title}
//                             />
//                             <FormInput
//                                 type={'text'}
//                                 id={`projectTechnologies-${index}`}
//                                 name={`projectTechnologies-${index}`}
//                                 label={'Technologies'}
//                                 isUppercase={false}
//                                 error={undefined}
//                                 defaultValue={project.technologies}
//                             />
//                             <FormInput
//                                 type={'text'}
//                                 id={`projectProjectLink-${index}`}
//                                 name={`projectProjectLink-${index}`}
//                                 label={'Project Link'}
//                                 isUppercase={false}
//                                 error={undefined}
//                                 defaultValue={project.projectLink}
//                             />
//                             <FormInput
//                                 type={'text'}
//                                 id={`projectCodeLink-${index}`}
//                                 name={`projectCodeLink-${index}`}
//                                 label={'Code Link'}
//                                 isUppercase={false}
//                                 error={undefined}
//                                 defaultValue={project.codeLink}
//                             />
//                             <FormInput
//                                 type={'text'}
//                                 id={`projectImageUrl-${index}`}
//                                 name={`projectImageUrl-${index}`}
//                                 label={'Image URL'}
//                                 isUppercase={false}
//                                 error={undefined}
//                                 defaultValue={project.imageUrl}
//                             />
//                         </div>
//                         <div className="flex justify-end mt-4">
//                             <Button type="button" onClick={() => removeProject(project.id)}>Remove</Button>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="flex justify-start mt-4">
//                     <Button type="button" onClick={addProject}>Add</Button>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                     <Button type="submit">Save</Button>
//                 </div>
//             </Form>
//         </CmsSectionContainer>
//     );
// };
//
// export default ProjectsCms;
