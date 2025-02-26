import { Button, ButtonForm, Container, Text } from '@/components/atoms'
import { BoxArticle, IconText, InputText, Select } from '@/components/molecules'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArrowToBottom, BiUser } from 'react-icons/bi'

export default function OneMaison() {
    return (
        <>
            {/* <section className='h-52 ' style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/img/maison.jpg")`
            }}>
                <Container>
                    <section className='flex justify-center h-52 relative'>
                        <article className='w-1/6 flex jusify-center items-center'>
                            <div className="border-2 h-40 w-40 rounded-full bg-[url('/img/logo.png')] bg-center bg-contain">
                            </div>
                        </article>
                        <article className='w-4/6 flex flex-col justify-center'>
                            <div className='space-y-1'>
                                <div>
                                    <Text weight='font-medium' className='text-3xl'>Venatis Veulum</Text>
                                    <Text color='text-primary' className='text-sm'>Maison  d'Habillement & Accesoire</Text>
                                </div>
                                <div className='w-3/4 pt-3'>
                                    <Text className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium optio laboriosam ut fugiat ratione error voluptates nihil, animi velit.</Text>
                                </div>
                                <div className='pt-3'>
                                    <IconText icon={<BiUser />} classText='text-sm font-medium text-gray-500' text='Maman Deborah Kapinga' />
                                </div>
                            </div>
                        </article>
                        <article className='w-1/5 pt-2 flex flex-col items-end'>
                            <div className='flex space-x-10 items-center py-2 md:py-0'>
                                <Link href='#'><Image src={'/img/facebook.png'} alt='facebook' width={20} height={20} /></Link>
                                <Link href='#'><Image src={'/img/instagram.png'} alt='facebook' width={20} height={20} /></Link>
                                <Link href='#'><Image src={'/img/tiktok.png'} alt='facebook' width={20} height={20} /></Link>
                            </div>
                        </article>
                        <article className='absolute bottom-0 right-0'>
                            <Button href='/'>Ecrire a la boutique</Button>
                        </article>
                    </section>

                </Container>

            </section> */}
            <section className="bg-[url('/img/vector.jpg')] bg-center bg-fixed -z-20 bg-cover pt-10">
                <Container>
                    <section className='flex flex-col space-y-5 justify-center items-center h-auto'>
                        {/* <article className=''>
                            <div className="h-40 w-40 rounded-full bg-[url('/img/logo.png')] bg-center bg-contain">
                            </div>
                        </article> */}
                        <article className=' flex flex-col justify-center items-center'>

                            <div>
                                <Text weight='font-medium' className='text-4xl'>Venatis Veulum</Text>
                                <Text color='text-primary'>Maison  d'Habillement & Accesoire</Text>
                            </div>
                            <div className='w-3/4 pt-3'>
                                <Text align='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium optio laboriosam ut fugiat ratione error voluptates nihil, animi velit.</Text>
                            </div>
                            <div className='pt-3'>
                                <IconText icon={<BiUser />} classText='text-sm font-medium text-gray-500' text='Maman Deborah Kapinga' />
                            </div>

                        </article>
                        <article className='flex flex-col items-end'>
                            <div className='flex space-x-10 items-center py-2 md:py-0'>
                                <Link href='#'><Image src={'/img/facebook.png'} alt='facebook' width={20} height={20} /></Link>
                                <Link href='#'><Image src={'/img/whatsapp.png'} alt='whatsapp' width={20} height={20} /></Link>
                                <Link href='#'><Image src={'/img/instagram.png'} alt='instagram' width={20} height={20} /></Link>
                                <Link href='#'><Image src={'/img/tiktok.png'} alt='tiktok' width={20} height={20} /></Link>
                            </div>
                        </article>
                    </section>
                </Container>
                <Container>
                    <section className=''>
                        <main className='flex justify-between items-center flex-col md:flex-row mt-2 py-10 z-10 bg-transparent '>
                            <div className='grid grid-cols-2 gap-4 w-full md:w-2/5'>
                                <div>
                                    <Select text='Categorie'>
                                        <option value="">Categories</option>
                                        <option>Homme</option>
                                        <option>Femme</option>
                                    </Select>
                                </div>
                            </div>
                            <div className='w-full md:w-1/4'>
                                <InputText text='Recherche' type='text' />
                            </div>
                        </main>
                    </section>
                    <section className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8'>
                        <BoxArticle image={'/img/pro2.webp'} catgeorie='Robe' text='Robe Hermest' prix='95 000' currency='CDF' nouveau />
                        <BoxArticle image={'/img/pro3.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 500' currency='CDF' />
                        <BoxArticle image={'/img/pro4.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 000' currency='CDF' solde />
                        <BoxArticle image={'/img/pro1.webp'} catgeorie='Robe' text='Pantalon Joggin' prix='31' currency='USD' />
                        <BoxArticle image={'/img/pro5.jpg'} catgeorie='Polo' text='Polo Laurent' prix='10' currency='USD' />
                        <BoxArticle image={'/img/pro6.jpg'} catgeorie='Pull' text='Pull Harrare' prix='15' currency='USD' nouveau />
                        <BoxArticle image={'/img/pro7.jpg'} catgeorie='Chemise' text='Chemisse Fendi' prix='11' currency='USD' />
                        <BoxArticle image={'/img/pro8.webp'} catgeorie='Robe' text='Robe un bras' prix='45' currency='USD' nouveau solde />
                        <BoxArticle image={'/img/pro2.webp'} catgeorie='Robe' text='Robe Hermest' prix='95 000' currency='CDF' />
                        <BoxArticle image={'/img/pro3.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 500' currency='CDF' nouveau />
                        <BoxArticle image={'/img/pro4.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 000' currency='CDF' />
                        <BoxArticle image={'/img/pro1.webp'} catgeorie='Robe' text='Pantalon Joggin' prix='31' currency='USD' />
                        <BoxArticle image={'/img/pro5.jpg'} catgeorie='Polo' text='Polo Laurent' prix='10' currency='USD' solde />
                        <BoxArticle image={'/img/pro6.jpg'} catgeorie='Pull' text='Pull Harrare' prix='15' currency='USD' nouveau solde />

                    </section>
                    <section className='flex justify-center pt-10'>
                        <ButtonForm text='Voir Plus' icon={<BiArrowToBottom />} color='bg-primary' />
                    </section>
                </Container>
            </section>



        </>
    )
}
