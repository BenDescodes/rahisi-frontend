import React from 'react'
import LayoutAdmin from './layout'
import { Text } from '@/components/atoms'

export default function Home() {
    return (

        <article className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10'>
            <div className='rounded-xl bg-blue-100/45 flex flex-col items-center py-5'>
                <Text className='text-4xl' weight='font-medium'>34</Text>
                <Text>Article</Text>
            </div>
            <div className='rounded-xl bg-green-100/45 flex flex-col items-center py-5'>
                <Text className='text-4xl' weight='font-medium'>34</Text>
                <Text>Article</Text>
            </div>
            <div className='rounded-xl bg-red-100/45 flex flex-col items-center py-5'>
                <Text className='text-4xl' weight='font-medium'>34</Text>
                <Text>Article</Text>
            </div>
            <div className='rounded-xl bg-teal-100/45 flex flex-col items-center py-5'>
                <Text className='text-4xl' weight='font-medium'>34</Text>
                <Text>Article</Text>
            </div>
        </article>

    )
}
