'use client';

import { useState } from 'react';
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import { updateExperienceData } from '@/app/actions/cms';
import { generateRandomId } from '@/app/utils/idGenerator';
import Form from "next/form";
import { Experience, ExperienceData } from '@/app/types/cms';

const ExperienceCms = ({ initialData }: { initialData: ExperienceData | null }) => {
    const [experiences, setExperiences] = useState<Experience[]>(initialData?.experiences || []);

    const addExperience = () => {
        setExperiences([...experiences, { id: generateRandomId(), company: '', title: '', dates: '', duties: '' }]);
    };

    const removeExperience = (id: number) => {
        setExperiences(experiences.filter((experience) => experience.id !== id));
    };

    return (
        <CmsSectionContainer title={"Experience"}>
            <Form className="flex flex-col gap-4" action={updateExperienceData}>
                {experiences.map((experience, index) => (
                    <div key={`experience-${index}`} className="border border-gray-600 p-4 rounded-md mb-4">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <FormInput
                                type={'text'}
                                id={`experienceCompany-${index}`}
                                name={`experienceCompany-${index}`}
                                label={'Company'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={experience.company}
                            />
                            <FormInput
                                type={'text'}
                                id={`experienceTitle-${index}`}
                                name={`experienceTitle-${index}`}
                                label={'Title'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={experience.title}
                            />
                            <FormInput
                                type={'text'}
                                id={`experienceDates-${index}`}
                                name={`experienceDates-${index}`}
                                label={'Dates'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={experience.dates}
                            />
                            <FormInput
                                type={'textarea'}
                                id={`experienceDuties-${index}`}
                                name={`experienceDuties-${index}`}
                                label={'Duties (comma-separated)'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={experience.duties}
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="button" onClick={() => removeExperience(experience.id)}>Remove</Button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-start mt-4">
                    <Button type="button" onClick={addExperience}>Add</Button>
                </div>
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </CmsSectionContainer>
    );
};

export default ExperienceCms;
