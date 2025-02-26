import { jost } from '@/config/config'

interface InputProps {
    type: string,
    className?: string,
    name?: string,
    placeholder?: string,
    other?: any
    required?: any,
}

export function Input({ type, className, name, placeholder, required, ...other }: InputProps) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...other}
            required
            className={`w-full ${className} px-2 py-2  border border-gray-300 focus:border-blue-700 duration-200 outline-none rounded-sm font-medium" ${jost.className}`}
        />
    )
}