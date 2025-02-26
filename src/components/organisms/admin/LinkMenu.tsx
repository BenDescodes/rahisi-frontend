'use client'
import { Icon, Text } from '@/components/atoms'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { GoNoEntry, GoPlusCircle } from 'react-icons/go'
import { HiMinusSmall } from 'react-icons/hi2'

interface SublinkProps {
    title: string,
    link: string
}

interface LinkMenuProps {
    name: string,
    lien?: string,
    submenu: boolean,
    sublink?: Array<SublinkProps>
}

export default function LinkMenu({ name, lien, submenu, sublink }: LinkMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };
    return (

        <section className="mb-5 relative group w-full">
            {
                lien ?
                    (
                        <Link href={lien} className='cursor-pointer flex justify-between items-center border-b-2 pb-3 border-primary'>
                            <Text weight='font-medium' className='text-lg  '>{name}</Text>
                        </Link>
                    )

                    : (
                        <div className='cursor-pointer w-auto flex justify-between items-center border-b-2 pb-3 border-primary' onClick={toggleSubMenu}>
                            <Text weight='font-medium' className='text-lg'>{name}</Text>
                            {isOpen ? <Icon icon={<HiMinusSmall />} className='font-bold transition-all duration-100' /> : <Icon icon={<BsPlus />} className='font-bold' />}
                        </div>
                    )
            }
            {
                submenu ?
                    isOpen && (
                        <ul className={`space-x-10 pt-5 z-10 top-full left-0 w-full transition-all duration-500 ease-in-out transform ${(isOpen ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-40')}`}>
                            {
                                sublink?.map((items, index) => (
                                    <Link href={items.link} key={index}>
                                        <li className='flex justify-between' key={index}>
                                            <Text weight='font-medium'>{items.title}</Text>
                                        </li>
                                        <hr className='mt-3' />
                                    </Link>
                                ))
                            }
                        </ul>
                    )

                    : ""
            }
        </section>
    )
}
