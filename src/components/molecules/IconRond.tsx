import React, { ReactNode } from 'react'
import { Icon } from '../atoms';
import Link from 'next/link';


interface IconRondProps {
    cat?: 'b' | 'c',
    href?: string,
    onClick?: () => void,
    icon: ReactNode
}

export function IconRond({ cat, href, onClick, icon }: IconRondProps) {
    switch (cat) {
        //B: blanc, la couleur la blanche
        case 'b':
            return (
                href &&
                <Link href={href} className="p-2 border  rounded-full hover:scale-110 duration-200 hover:text-secondaire inline-block hover:border-secondaire text-white border-white">
                    <Icon className='text-base' icon={icon} />
                </Link>
            )
            break;
        //C : Carroussel, icon
        case 'c':
            return (
                <button onClick={onClick} className="p-3 rounded-full hover:scale-105 duration-150 inline-block bg-secondaire text-white">
                    <Icon className='text-lg' icon={icon} />
                </button>
            )
            break;
        // icon rond normal 
        default:
            return (
                href &&
                <Link href={href} className="p-2 border bg-primary rounded-full hover:scale-105 duration-150 inline-block  text-white ">
                    <Icon className='text-base' icon={icon} />
                </Link>
            )
            break;
    }
}
