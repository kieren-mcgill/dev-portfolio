import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode
    id?: string
}

const Section = ({children, id}: SectionProps) => {

    return (
        <section id={id || ""}>
            <div className="m-auto max-w-[90rem]">
                {children}
            </div>
        </section>
    )
}

export default Section;