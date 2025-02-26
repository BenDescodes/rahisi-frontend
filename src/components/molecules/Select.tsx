import { ReactNode } from "react";
import { Label } from "../atoms";
import { Jost } from 'next/font/google'
const sen = Jost({ subsets: ['latin'] })
interface SelectProps {
    text: string,
    children: ReactNode,
    cat?: 'r'
}

export function Select({ text, children, cat }: SelectProps) {
    switch (cat) {
        default:
            return (
                <div className="md:flex items-center py-2">
                    {/* <label htmlFor={text} className={`inline-block w-full text-sm md:w-1/5 text-gray-700 font-medium `}>{text}</label> */}
                    <Label className="md:w-1/4">{text}</Label>
                    <select name="" id={text} className={`"px-7 py-2 w-full md:w-3/4 shadow-sm border border-gray-300 focus:border-blue-700 duration-200 outline-none rounded-sm text-gray-900  text-md sm:text-sm" ${sen.className}`}>
                        {children}
                    </select>
                </div>
            )
            break;

        case 'r':
            return (
                <div className="md:flex items-center py-2">
                    {/* <label htmlFor={text} className={`inline-block w-full text-sm md:w-1/5 text-gray-700 font-medium text-left md:text-right pr-4`}>{text}</label> */}
                    <Label className="md:w-1/4">{text}</Label>
                    <select name="" id={text} className={`"px-4 py-2 w-full md:w-3/4 shadow-sm border-b border-gray-300 focus:border-blue-700 duration-200 outline-none rounded-sm text-gray-700  text-md sm:text-sm" ${sen.className}`}>
                        {children}
                    </select>
                </div>
            )
            break;
    }
}