'use client';

import { useState } from 'react';
import Section from "@/app/components/global/Section";

const experienceData = [
    {
        company: 'Company A',
        title: 'Software Engineer',
        dates: 'Jan 2022 - Present',
        duties: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ]
    },
    {
        company: 'Company B',
        title: 'Frontend Developer',
        dates: 'May 2020 - Dec 2021',
        duties: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    },
    {
        company: 'Company C',
        title: 'Web Developer Intern',
        dates: 'Jun 2019 - Aug 2019',
        duties: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ]
    }
];

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Section
            sectionClass='py-lg'
            title={"Experience"}
        >
            <div className="md:flex md:gap-12">
                <div className="flex md:flex-col overflow-x-auto mb-8 md:mb-0 md:border-r md:border-white/20 md:pr-8">
                    {experienceData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 text-left whitespace-nowrap ${activeTab === index ? 'bg-white/10' : ''}`}>
                            {item.company}
                        </button>
                    ))}
                </div>
                <div className="flex-grow">
                    <h3 className="h3 mb-2">{experienceData[activeTab].title} @ {experienceData[activeTab].company}</h3>
                    <p className="mb-4">{experienceData[activeTab].dates}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        {experienceData[activeTab].duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection;