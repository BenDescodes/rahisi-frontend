import { Button, ButtonForm, Container, Icon, Text, Title } from '@/components/atoms'
import { BoxArticle } from '@/components/molecules'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { FaFacebook, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function OneArticle() {
    return (
        <Container className='py-10'>
            <section className='flex space-x-8'>
                <article className='basis-1/12 space-y-2'>
                    <div>
                        <Image src='/img/pro2.webp' alt='one image' className='h-[130px] w-full object-cover' width={100} height={200} />
                    </div>
                    <div>
                        <Image src='/img/pro1.webp' alt='one image' className='h-[130px ] w-full object-cover' width={100} height={200} />
                    </div>
                    <div>
                        <Image src='/img/pro8.webp' alt='one image' className='h-[130px ] w-full object-cover' width={100} height={200} />
                    </div>
                    <div>
                        <Image src='/img/pro6.jpg' alt='one image' className='h-[130px ] w-full object-cover' width={100} height={200} />
                    </div>
                </article>
                <div className='basis-4/12'>
                    <Image src='/img/pro2.webp' alt='one image' className='h-[600px] w-full  object-cover' width={300} height={500} />
                </div>
                <div className='basis-6/12 space-y-4'>
                    <Title>Robe Hermest</Title>
                    <Text weight='font-medium' color='text-primary' className='text-3xl'>23 $</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure nesciunt velit quam debitis voluptate ipsum saepe et mollitia provident beatae, natus hic.</Text>
                    <Text>Taille : S, M, XL</Text>
                    <Text>Couleur : Bleu, Rouge, Jaune</Text>
                    <Text>Maison : <Link href='/maison/2' className='text-blue-600'>Coco Channel</Link></Text>
                    <div className='flex space-x-3'>
                        <Button href='#'>Commander</Button>
                        <ButtonForm icon={<BsHeart />} color='bg-primary' />
                    </div>
                    <div className='border-t border-b border-gray-300 text-gray-500 py-3 mt-4 w-52 flex items-center space-x-9'>
                        <Text color='text-gray-500'>Partage sur : </Text>
                        <div className=''>
                            <Icon icon={<FaFacebook />} className='text-xl' />
                        </div>
                        <div>
                            <Icon icon={<IoLogoWhatsapp />} className='text-xl' />
                        </div>
                    </div>

                </div>
            </section>
            <section className='py-20 flex flex-col justify-center items-center text-center'>
                <Title className='pb-10'>ARTICLES SIMILAIRES</Title>
                <section className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8'>
                    <BoxArticle image={'/img/pro2.webp'} catgeorie='Robe' text='Robe Hermest' prix='95 000' currency='CDF' nouveau />
                    <BoxArticle image={'/img/pro3.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 500' currency='CDF' />
                    <BoxArticle image={'/img/pro4.jpg'} catgeorie='Accessoire' text='Shamppoing cheveux' prix='14 000' currency='CDF' solde />
                    <BoxArticle image={'/img/pro1.webp'} catgeorie='Robe' text='Pantalon Joggin' prix='31' currency='USD' />
                </section>
            </section>
        </Container>
    )
}
