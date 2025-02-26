import Image from 'next/image'
import React from 'react'
import { Text } from '../atoms'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Link from 'next/link'

interface BoxFavorisProps {
    image: string
    titre: string
    categorie?: string
    description?: string
    prix: string
    href: string
}

export function BoxFavoris({ image, titre, categorie, description, prix, href }: BoxFavorisProps) {
    return (
        <section className='grid grid-cols-6 gap-5 pb-9 hover:scale-105 duration-150'>
            <article className='col-span-2 md:col-span-1'>
                <Image src={image} width='300' height='200' className='object-cover h-[150px] w-[120px]' alt='accesoire image' />
            </article>
            <article className='col-span-3 md:col-span-4 pl-6 flex flex-col justify-center'>
                <article className='grid grid-flow-row md:grid-cols-3'>
                    <div className='col-span-2'>
                        <Link href={href}>
                            <Text className='text-lg' weight='font-medium'>{titre}</Text>
                            <Text className='text-sm' color='text-gray-500'>{categorie}</Text>
                        </Link>
                        <div className='hidden md:block pt-2'>
                            <Text className='text-sm'>{description} </Text>
                        </div>
                    </div>
                    <article className='flex flex-col justify-center items-center pt-2 md:pt-0'>
                        <Text className='md:text-lg' color='text-primary' weight='font-medium'>{prix}</Text>
                    </article>
                </article>
            </article>
            <article className='flex justify-center items-center'>
                <div className='flex flex-col space-y-2 justify-end'>
                    <div>
                        <div className='border-gray-500 text-gray-500 cursor-pointer'><IoIosCloseCircleOutline className='text-3xl duration-200 hover:text-red-600' /></div>
                    </div>
                </div>
            </article>
        </section>
    )
}
