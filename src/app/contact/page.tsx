import { ButtonForm, Container, Icon, Text, TextArea, Title } from '@/components/atoms'
import { InputText } from '@/components/molecules'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { CiFacebook, CiInstagram, CiMail } from 'react-icons/ci'
import { ImFacebook } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { PiPhoneCallBold, PiWhatsappLogoThin } from 'react-icons/pi'
import { RiInstagramFill, RiSendPlaneFill, RiTiktokFill, RiWhatsappLine } from 'react-icons/ri'

export default function page() {
    return (
        <main className=''>
            <Container className='py-14'>
                <section className='w-full md:w-3/5 mx-auto text-center'>
                    <Title className='text-4xl text-center mb-3'> PRENDRE CONTACT</Title>
                    <div className='flex justify-center'>
                        <Text align='text-center'>Notre équipe est à votre disposition pour répondre à toutes vos questions, demandes de renseignements ou commentaires. N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en nous appelant directement. .</Text>
                    </div>
                </section>
                <section className='grid grid-cols-1 md:grid-cols-2 pt-14 gap-8 md:gap-14'>
                    <article className='flex flex-col space-y-8 bg-[#177372] px-20 py-20'>
                        <div>
                            <Title className='text-white'>Contacter Nous</Title>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <Icon icon={<CiMail />} className='text-2xl text-yellow-200' />
                            <Text color='text-white'>contact@rahisi.store</Text>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <Icon icon={<PiWhatsappLogoThin />} className='text-2xl text-yellow-200' />
                            <Text color='text-white'><Link href={'https://wa.me/+2434590707'}>+243894590707</Link></Text>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <Icon icon={<CiFacebook />} className='text-2xl text-yellow-200' />
                            <Text color='text-white'><Link href={'https://wa.me/+2434590707'}>Rahisi Style</Link></Text>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <Icon icon={<CiInstagram />} className='text-2xl text-yellow-200' />
                            <Text color='text-white'><Link href={'https://wa.me/+2434590707'}>Rahisi Style</Link></Text>
                        </div>


                    </article>
                    <form action="" method="post" className="space-y-5">
                        <InputText cat='p' text={'Nom complet'} type='text' />
                        <InputText cat='p' text={'Objet de votre message'} type='text' />
                        <TextArea text={'Votre message'} />
                        <ButtonForm icon={<RiSendPlaneFill />} color={'bg-primary'} text={'Envoyer'} type='button' />
                    </form>

                </section>
                <section className='pt-10'>
                    <article className='w-3/5 mx-auto text-center pb-5'>
                        <Title className='text-4xl text-center mb-3'> Foire aux questions</Title>
                    </article>
                    <article className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-20 gap-y-8 md:gap-y-10'>
                        <div className='space-y-3'>
                            <Text weight='font-medium'>Comment fonctionne Rahisi Style ?</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus inventore omnis deleniti laborum temporibus corporis animi magni totam sit ut aspernatur at reiciendis accusantium voluptatibus, alias similique voluptatem veritatis.</Text>
                        </div>
                        <div className='space-y-3'>
                            <Text weight='font-medium'>Comment acheter sur Platform ?</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus inventore omnis deleniti laborum temporibus corporis animi magni totam sit ut aspernatur at reiciendis accusantium voluptatibus, alias similique voluptatem veritatis.</Text>
                        </div>
                        <div className='space-y-3'>
                            <Text weight='font-medium'>Comment devenir vendeur ?</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus inventore omnis deleniti laborum temporibus corporis animi magni totam sit ut aspernatur at reiciendis accusantium voluptatibus, alias similique voluptatem veritatis.</Text>
                        </div>
                        <div className='space-y-3'>
                            <Text weight='font-medium'>Pourquoi il y a un abonnement ?</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque necessitatibus inventore omnis deleniti laborum temporibus corporis animi magni totam sit ut aspernatur at reiciendis accusantium voluptatibus, alias similique voluptatem veritatis.</Text>
                        </div>
                    </article>
                </section>
            </Container>
        </main>
    )
}
