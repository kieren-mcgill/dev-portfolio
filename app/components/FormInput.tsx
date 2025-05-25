
type FormInputProps = {
    type: 'text' | 'email' | 'textarea'
    id: string
    name: string
    error?: string
}

const FormInput = ({type, id, name, error}: FormInputProps) => {

    return (
        <div className="relative flex flex-col">
            <label
                className="uppercase"
                htmlFor={id}>{id}</label>
            <input
                className="h-10 border-b-1 border-white focus:outline-none focus:ring-0 "
                name={name}
                id={id}
                type={type}
            />
            {
                error &&
                <p className="absolute top-full text-red">{error}</p>
            }

        </div>
    )
}

export default FormInput;