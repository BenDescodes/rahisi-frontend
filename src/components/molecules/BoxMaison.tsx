import Image from 'next/image'
import React from 'react'
import { Button, Text, Title } from '../atoms'
import Link from 'next/link'

interface BoxMaisonProps {
    image: string
    href: string
    title: string
    libelle: string
    logo: string
    categorie?: string
}

export function BoxMaison({ image, href, title, libelle, logo, categorie }: BoxMaisonProps) {
    return (
        <section>
            <Link href={href}>
                <div className='h-52 relative'>
                    <Image src={image} height='72' width='1000' alt='devanture magasin' className='object-cover h-52 w-full' />
                    <Text className='absolute bottom-0 left-[50%] translate-x-[-50%] mx-auto bg-primary/90 text-sm p-3 text-white '>{categorie}</Text>
                </div>
                <div className='py-3 text-center'>
                    <Title className='text-lg'>{title}</Title>
                    <Text className='text-sm ' align='text-center'>{libelle}</Text>
                </div>
            </Link>
        </section>

    )
}
