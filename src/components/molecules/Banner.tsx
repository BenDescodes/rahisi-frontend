import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import { Title } from '../atoms'
interface BannerProps {
    /* image: StaticImageData, */
    text: ReactNode,
}

export function Banner({ text }: BannerProps) {
    //rendu
    return (
        <section className="h-36 w-full relative flex items-center justify-center px-5 bg-[url('/img/dr15.jpg')] bg-top  bg-cover">
            {/*  <Title className='text-primary text-4xl'>{text}</Title> */}
            {/* <article className="h-56 overflow-hidden absolute top-0 bg-background/90 bg">
                <Image src={'/img/banner.jpg'} height='1000' width={200} alt="Background image" className='w-full h-auto object-cover mix-blend-overlay' />
            </article> */}
            <article className="flex items-center justify-center h-36">
                <Title className='text-black text-4xl'>{text}</Title>
            </article>
        </section>
    )
}
