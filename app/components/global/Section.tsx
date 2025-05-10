import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode,
    id?: string,
    sectionClass?: string,
    innerClass?: string
}

const Section = ({children, id, sectionClass, innerClass}: SectionProps) => {

    return (
        <section id={id || ""} className={sectionClass || ''}>
            <div className={`m-auto max-w-[90rem] ${innerClass}`}>
                {children}
            </div>
        </section>
    )
}

export default Section;