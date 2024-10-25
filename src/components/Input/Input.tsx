import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    classNameInput?: string
    classNameError?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>
    errorMessage?: string
    name?: string
    errorEmail?: string
    inputEmail?: boolean
    setErrorEmail?: React.Dispatch<React.SetStateAction<string>>
    errorPassword?: string
    inputPassword?: boolean
    setErrorPassword?: React.Dispatch<React.SetStateAction<string>>
}

export default function Input({
    className,
    classNameError = 'text-red-500 text-[14px] mt-[2px] min-h-[20px]',
    classNameInput = 'w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]',
    name,
    errorMessage,
    register,
    errorEmail,
    errorPassword,
    inputEmail,
    inputPassword,
    setErrorPassword,
    setErrorEmail,
    ...rest
}: InputProps) {
    const registerResult = register && name ? register(name) : {}

    const resetErrorEmail = () => {
        if (inputEmail) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            setErrorEmail && setErrorEmail('')
        }
        if (inputPassword) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            setErrorPassword && setErrorPassword('')
        }
    }

    return (
        <div className={className}>
            <input type='text' className={classNameInput} {...registerResult} {...rest} onInput={resetErrorEmail} />
            <p className={classNameError}>
                {(errorEmail && errorEmail) || (errorPassword && errorPassword) || errorMessage}
            </p>
        </div>
    )
}
