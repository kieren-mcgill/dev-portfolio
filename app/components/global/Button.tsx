import Link from "next/link";
import {ReactNode} from "react";

type ButtonProps = {
    type: 'link' | 'ext-link' | 'submit'
    path?: string
    children: ReactNode
}

const Button = ({type, path, children}: ButtonProps) => {

    const styles = `
        uppercase font-bold border-b-2 border-green pb-2
        hover:border-white hover:-translate-y-1
        transition duration-200
    `;

    switch (type) {
        case 'link':
            return (
                <Link
                    className={styles}
                    href={path || ""}
                >
                    {children}
                </Link>
            );
        case 'ext-link':
            return (
                <a
                    className={styles}
                    href={path || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        case 'submit':
            return (
                <button
                className={styles}
                type="submit"
                >
                    {children}
                </button>
            )
    }
}

export default Button;