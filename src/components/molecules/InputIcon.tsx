import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Icon } from "../atoms";
import { jost } from '@/config/config'

interface InputIconProps {
    text: string,
    icon: ReactNode,
    className?: string,
    other?: string,
    type?: HTMLInputTypeAttribute
}
export function InputIcon({ text, icon, className, type, ...other }: InputIconProps) {
    return (
        <div className="relative">
            <input
                type={type ? type : 'text'}
                name=""
                id=""
                placeholder={text}
                {...other}
                className={`p-3 shadow-sm w-full pl-14 border border-gray-300 duration-200 ${className} outline-none rounded-sm text-gray-600 dark:text-gray-50 text-md sm:text-sm ${jost.className}`}
            />
            <Icon className="absolute left-4 top-3 text-primary text-xl" icon={icon} />
        </div>
    )
}
