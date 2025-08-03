import { ReactNode } from 'react';

interface CmsSectionContainerProps {
    title: string;
    children: ReactNode;
}

const CmsSectionContainer = ({ title, children }: CmsSectionContainerProps) => {
    return (
        <div className="p-6 border border-gray-700 rounded-lg mb-8">
            <h2 className="h3 text-xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default CmsSectionContainer;
