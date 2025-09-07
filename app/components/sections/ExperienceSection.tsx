'use client';

import { useState } from 'react';
import Section from "@/app/components/global/Section";
import { ExperienceData } from '@/app/types/cms';

const ExperienceSection = ({ experienceData }: { experienceData: ExperienceData | null }) => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = experienceData?.experiences ?? [];

    return (
        <Section
            sectionClass='py-lg'
            title={"Experience"}
        >
            <div className="md:flex md:gap-12">
                <div className="flex overflow-x-auto md:flex-col mb-8 md:mb-0 md:border-r md:border-white/20 md:pr-8">
                    {experiences?.length && experiences.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 text-left whitespace-nowrap min-w-fit ${activeTab === index ? 'bg-white/10' : ''}`}>
                            {item.company}
                        </button>
                    ))}
                </div>
                <div className="flex-grow">
                    { experiences?.length &&
                        <>
                            <h3 className="h3 mb-2">{experiences[activeTab].title}</h3>
                            <p className="mb-4">{experiences[activeTab].dates}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {experiences[activeTab].duties.split('*').map((duty, index) => (
                                    <li key={index}>{duty.trim()}</li>
                                ))}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection;