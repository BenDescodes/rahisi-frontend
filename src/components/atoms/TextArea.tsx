import React from 'react'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

interface TextAreaProps {
    text: string
}
export function TextArea({ text }: TextAreaProps) {
    return (
        <textarea name="" placeholder={text} id="" cols={20} rows={10} className={`p-2 w-full border border-gray-300 focus:border-blue-700 duration-200 outline-none rounded-sm text-gray-700 sm:text-md ${jost.className}`}>

        </textarea>
    )
}
