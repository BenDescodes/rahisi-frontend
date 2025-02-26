import React from 'react'
import { Button, Icon, Text } from '../atoms'
import { MdFavorite } from 'react-icons/md'
import Image, { StaticImageData } from 'next/image'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

interface BoxArticleProps {
    image: string
    text: string
    prix: string
    currency: string
    catgeorie?: string
    solde?: boolean
    nouveau?: boolean
    favoris?: boolean
}
export function BoxArticle({ image, text, prix, currency, catgeorie, solde, nouveau, favoris }: BoxArticleProps) {
    return (
        <article className='min-h-max relative'>
            <div className='overflow-hidden'>
                <Image src={image} width={300} height={400} alt={`${text} article rahisi article`} className='w-[250px] md:w-[300px] h-[250px] md:h-[350px] object-cover hover:scale-110 duration-200' />

            </div>
            <div className='flex flex-col py-3 text-bold items-center '>
                <Text className='text-sm mb-2'>{catgeorie}</Text>
                <Text weight='font-medium'>{text}</Text>
                <Text weight='font-medium' className='text-primary'>{prix} {currency}</Text>
            </div>
            {/* <div className='flex justify-between'>
                <Button href='#'>Commander</Button>
                <Button href='#'><MdFavorite /></Button>
            </div> */}
            {
                nouveau && <div className='w-10 h-10 flex justify-center rounded-full items-center bg-primary absolute top-3 left-3'>
                    <Text className='text-white text-xs'>NEW</Text>
                </div>
            }
            {
                solde && <div className='w-10 h-10 flex justify-center rounded-full items-center bg-red-500 absolute top-3 right-3'>
                    <Text className='text-white text-xs'>SOLDE</Text>
                </div>
            }
            {
                favoris
                    ? <div className='absolute bottom-8 right-3'> <Text className='text-red-600'><Icon icon={<IoMdHeart />} className='text-xl' /></Text></div>
                    : <div className='absolute bottom-8 right-3'> <Text className=''><Icon icon={<IoMdHeartEmpty />} className='text-xl' /></Text></div>
            }

        </article >
    )
}
