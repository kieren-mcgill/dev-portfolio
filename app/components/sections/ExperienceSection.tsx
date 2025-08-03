'use client';

import { useState } from 'react';
import Section from "@/app/components/global/Section";

type Experiences = {
    company: string
    title: string
    duties: string
    dates: string
}

const ExperienceSection = ({ experienceData }: { experienceData: {experiences: Experiences[]} }) => {
    const [activeTab, setActiveTab] = useState(0);

    console.log("experience", experienceData)

    const experiences = experienceData.experiences ?? [];

    return (
        <Section
            sectionClass='py-lg'
            title={"Experience"}
        >
            <div className="md:flex md:gap-12">
                <div className="flex md:flex-col overflow-x-auto mb-8 md:mb-0 md:border-r md:border-white/20 md:pr-8">
                    {experiences?.length && experiences.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 text-left whitespace-nowrap ${activeTab === index ? 'bg-white/10' : ''}`}>
                            {item.company}
                        </button>
                    ))}
                </div>
                <div className="flex-grow">
                    { experiences?.length &&
                        <>
                            <h3 className="h3 mb-2">{experiences[activeTab].title} @ {experiences[activeTab].company}</h3>
                            <p className="mb-4">{experiences[activeTab].dates}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {experiences[activeTab].duties.split(',').map((duty, index) => (
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