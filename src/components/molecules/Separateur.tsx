import Link from 'next/link'
import React from 'react'
import { Text } from '../atoms'
interface SeparateurProps {
    link: string
    text: string
}
export function Separateur({ link, text }: SeparateurProps) {
    return (
        <Link href={link} className='flex items-center space-x-3 pt-5'>
            <hr className='w-5 border-[1px] border-primary' />
            <Text color='text-primary'>{text}</Text>
            <hr className='w-5 border-[1px] border-primary' />
        </Link>
    )
}
