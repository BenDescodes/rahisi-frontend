import { Container, Icon, Links, Text, Title } from '@/components/atoms'
import { IconText } from '@/components/molecules'
import Image from 'next/image'
import React from 'react'
import { BsShop } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { GiShop } from 'react-icons/gi'
import { SiShopee } from 'react-icons/si'

export default function page() {
    return (
        <main className="flex flex-col justify-center items-center py-14 bg-[url('/img/vector.jpg')] bg-center bg-fixed -z-20 bg-cover">
            <Container>
                <section className='w-full md:w-3/5 mx-auto text-center'>
                    <Title className='text-4xl text-center mb-3 font-extrabold'> A PROPOS DE RAHISI STYLE</Title>
                    <div className='flex justify-center'>
                        <div>
                            <Text align='text-center'>Nous sommes une plaforme mondiale de publicité en ligne qui promouvois les boutiques d’habillement à fin d’attirer plus des clientèles.</Text><br />
                            <Text align='text-center'>RAHISI se charge de proposer vos produits à des clients potentiels en ligne afin de permettre l’écroulement rapide en toute securité.</Text>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col space-y-20 pt-16'>
                    <article className='flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-20 justify-center'>
                        <div className='w-full md:w-2/4 flex justify-end'>
                            <div className='flex justify-start relative w-full md:w-3/5'>
                                <Image src={'/img/accessoire.jpg'} width='400' height='200' className='object-cover z-10' alt='accesoire image' />
                                <div className='w-48 h-5 bg-primary absolute -top-3 right-10 -z-0 '></div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/4 flex items-start md:items-center'>
                            <div className='w-full md:w-3/5'>
                                <Title>Plateforme Professionnelle</Title>
                                <Text>Découvrez notre plateforme e-commerce, un espace dédié à l'expérience d'achat en ligne. Avec une interface conviviale et intuitive, notre plateforme offre une sélection inégalée de produits, des fonctionnalités de recherche avancées et un moyen de commande simplifiée.</Text>
                            </div>
                        </div>
                    </article>
                    <article className='flex flex-col-reverse md:flex-row space-x-0 space-y-0 md:space-y-0 md:space-x-20 justify-center'>
                        <div className='w-full md:w-2/4 flex items-start md:items-center justify-end'>
                            <div className='w-full md:w-3/5 pt-8 md:pt-0'>
                                <Title>Magasin certifié</Title>
                                <Text>Découvrez nos magasins certifiés, gages de qualité et d'authenticité. Chacun de nos partenaires a été rigoureusement sélectionné pour offrir une expérience d'achat exceptionnelle.</Text>
                            </div>
                        </div>
                        <div className='w-full md:w-2/4 flex items-start md:items-center'>
                            <div className='flex justify-start relative w-full md:w-3/5'>
                                <Image src={'/img/accessoire.jpg'} width='400' height='200' className='object-cover z-10' alt='accesoire image' />
                                <div className='w-5 h-44 bg-primary absolute -left-3 -z-0 top-8 '></div>
                            </div>
                        </div>
                    </article>
                    <article className='flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-20 justify-center'>
                        <div className='w-full md:w-2/4 flex justify-end'>
                            <div className='flex justify-start relative w-full md:w-3/5'>
                                <Image src={'/img/accessoire.jpg'} width='400' height='200' className='object-cover z-10' alt='accesoire image' />
                                <div className='w-48 h-5 bg-primary absolute -bottom-3 right-10 z-0 '></div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/4 flex items-start md:items-center'>
                            <div className='w-full md:w-3/5'>
                                <Title>Commande simple</Title>
                                <Text>Que vous recherchiez des vêtements tendance, des accessoires élégants ou des pièces intemporelles, notre platform regroupe une variété de marques renommées et de créations exclusives. CLIQUER et COMMANDER</Text>
                            </div>
                        </div>
                    </article>

                    <article className='pt-10'>
                        <div className='flex flex-col justify-center w-full'>
                            {/* <Title className='text-center'> LES CHIFFRES PARLENT</Title> */}
                            <div className='flex flex-col md:flex-row justify-center md:justify-around'>
                                <div className='flex flex-col items-center py-5'>
                                    <Text weight='font-medium' className='text-5xl'>54065</Text>
                                    <Text align='text-center'>ARTICLES</Text>
                                </div>
                                <div className='flex flex-col items-center py-5'>
                                    <Text weight='font-medium' className='text-5xl'>45</Text>
                                    <Text align='text-center'>MAGASINS</Text>
                                </div>
                                <div className='flex flex-col items-center py-5'>
                                    <Text weight='font-medium' className='text-5xl'>134970</Text>
                                    <Text align='text-center'>COMMANDES</Text>
                                </div>
                            </div>
                        </div>
                    </article>

                </section>
            </Container>
        </main>
    )
}
