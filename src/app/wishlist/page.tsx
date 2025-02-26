import { ButtonForm, Container, Text } from '@/components/atoms'
import { Banner, BoxFavoris } from '@/components/molecules'
import Image from 'next/image'
import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'
import { CgEye } from 'react-icons/cg'
import { IoIosClose, IoIosCloseCircle, IoIosCloseCircleOutline } from 'react-icons/io'

export default function page() {
    return (
        <>
            <Banner text='LISTE DES FAVORIS' />
            <Container className='py-10'>
                <section className='flex flex-col w-11/12 md:w-9/12 justify-center items-center mx-auto'>
                    <BoxFavoris href='/' image='/img/pro5.jpg' titre='T-shirt Tendance 2022' prix='32 000 FC' categorie='Polo' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. adipisicing elit.' />
                    <BoxFavoris href='/' image='/img/pro4.jpg' titre='Shappoing Cheveux' prix='13 $' categorie='Accessoire' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. adipisicing elit.' />
                    <BoxFavoris href='/' image='/img/pro5.jpg' titre='T-shirt Tendance 2022' prix='32 000 FC' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. adipisicing elit.' />

                </section>
                <section className='flex justify-center'>
                    <ButtonForm text='Voir Plus' icon={<BiArrowToBottom />} color='bg-primary' />
                </section>
            </Container>


        </>
    )
}
