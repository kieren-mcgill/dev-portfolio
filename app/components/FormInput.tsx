
type FormInputProps = {
    type: 'text' | 'email' | 'textarea' | 'password'
    id: string
    name: string
    error?: string | null
    label?: string
    isUppercase?: boolean
    defaultValue?: string;
}

const FormInput = ({type, id, name, label,  error, isUppercase = true, defaultValue}: FormInputProps) => {

    return (
        <div className="relative flex flex-col">
            <label
                className={isUppercase ? 'uppercase' : ''}
                htmlFor={id}>{label ?? id}</label>
            {type === 'textarea' ? (
                <textarea
                    className="h-48 border-b-1 border-white focus:outline-none focus:ring-0 "
                    name={name}
                    id={id}
                    defaultValue={defaultValue ?? ""}
                ></textarea>
            ) : (
                <input
                    className="h-10 border-b-1 border-white focus:outline-none focus:ring-0 "
                    name={name}
                    id={id}
                    type={type}
                    defaultValue={defaultValue ?? ""}
                />
            )}
            {
                error &&
                <p className="absolute top-full text-red">{error}</p>
            }

        </div>
    )
}

export default FormInput;
