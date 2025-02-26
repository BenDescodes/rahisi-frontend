import React, { ReactNode } from 'react'
import { Icon, Text } from '.';
interface ButtonFormProps {
    text?: string,
    color?: string,
    icon?: ReactNode,
    other?: any,
    type?: "reset" | "button"
}

export function ButtonForm({ text, color, icon, type, ...other }: ButtonFormProps) {
    // ici c'est le button par defaut avec l'icon. exemple dans la page membre
    return (

        <button
            type={type ? type : 'submit'}
            /* onClick={onClick} */
            {...other}
            className={`px-2 md:px-4 py-2 md:py-3 rounded-sm font-medium cursor-pointer flex space-x-1 items-center ${color} text-white active:scale-95 duration-75`}
        >
            <Icon icon={icon} className="pr-1 text-xl" />
            <Text className="text-md sm:text-sm" color='text-white'>{text}</Text>
        </button>
    )
}
