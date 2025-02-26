import { ButtonForm, Container } from '@/components/atoms'
import { Banner } from '@/components/molecules'
import { SideBar } from '@/components/organisms'
import React, { ReactNode } from 'react'
import { HiMinusSmall } from 'react-icons/hi2'
interface AdminProps {
    children: ReactNode
}
export default function LayoutAdmin({ children }: AdminProps) {

    return (
        <>
            <Banner text='ESPACE VENDEUR' />
            <div className='md:hidden flex justify-end pr-5 pt-5'>
                <ButtonForm icon={<HiMinusSmall />} color={'bg-primary'} text={'Menu'} type='button' />
            </div>
            <Container className='flex space-x-0 md:space-x-20 py-8 relative'>

                <SideBar />
                <section className='w-full md:w-10/12'>
                    {children}
                </section>
            </Container>
        </>
    )
}