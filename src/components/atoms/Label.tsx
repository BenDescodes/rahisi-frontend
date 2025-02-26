import { ReactNode } from "react";
import { Jost } from 'next/font/google'
const sen = Jost({ subsets: ['latin'] })

interface LabelProps {
    children: ReactNode,
    className?: string,
}

export function Label({ children, className }: LabelProps) {
    return (
        <label
            htmlFor=""
            className={`inline-block w-full ${className} mr-3 capitalize  text-sm text-gray-700 font-medium ${sen.className}`}
        >
            {children}
        </label>
    )
}