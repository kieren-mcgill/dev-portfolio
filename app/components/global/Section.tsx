import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode,
    title?: string,
    id?: string,
    sectionClass?: string,
    innerClass?: string
}

const Section = ({children, title, id, sectionClass, innerClass}: SectionProps) => {

    return (
        <section id={id || ""} className={sectionClass || ''}>
            <div className={`m-auto max-w-[90rem] ${innerClass || ''}`}>
                {title &&
                    <h2 className="h1 mb-lg">{title}</h2>
                }

                {children}
            </div>
        </section>
    )
}

export default Section;