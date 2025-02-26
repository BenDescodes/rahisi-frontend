import React from 'react'
import { Button, Text } from '../atoms'

interface BoxPricePropos {
    tarif: string
    price: string
    text: string
}

export function BoxPrice({ tarif, price, text }: BoxPricePropos) {
    return (
        <article className='py-10 rounded-sm relative border bg-white shadow-sm hover:shadow-md duration-200 flex flex-col justify-center items-center'>
            <div className='p-2'>
                <div className='p-2'>
                    <Text className='text-center text-3xl' weight='font-medium'>{tarif}</Text>
                </div>
                <div className='absolute -top-10 left-[50%] translate-x-[-50%] bg-primary rounded-full w-20 h-20 flex justify-center items-center'>
                    <Text align='text-center' className=''><span className='text-3xl font-bold text-white'>{price}</span></Text>
                </div>
                {/* <div className='w-56 h-5 bg-primary absolute -bottom-3 right-20 -z-10 '></div> */}
            </div>
            <div className='px-5'>
                <Text align='text-center'>{text}</Text>
            </div>
            <div className='pt-8'>
                <Button href='/' className='text-center'>Souscrire</Button>
            </div>
        </article>
    )
}
