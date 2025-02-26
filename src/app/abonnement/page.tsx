import { Button, Container, Icon, Text, Title } from '@/components/atoms'
import { BoxPrice } from '@/components/molecules'
import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

export default function page() {
    return (
        <main className=''>
            <Container className='py-14'>
                <section className='w-full md:w-3/5 mx-auto text-center'>
                    <Title className='text-4xl text-center mb-3'> ABONNEMENT</Title>
                    <div className='flex justify-center'>
                        <Text align='text-center'>Plongez dans un monde de possibilités avec notre système d'abonnement sur mesure, conçu pour vous offrir un accès illimité à la publication des vos artiles et bien plus encore.</Text>
                    </div>
                </section>
                <section className='pt-20 grid grid-cols-1 md:grid-cols-3 gap-20'>
                    <BoxPrice tarif='Mensuel' price='8$' text="Avec cette offre, vous bénéficiez d'un mois pour publier vos articles et d'une publicité sur nos réseaux sociaux pour votre boutique durant 3 jours." />
                    <BoxPrice tarif='Semestre' price='40$' text="Avec cette offre, vous bénéficiez de 6 mois pour publier vos articles et d'une publicité sur nos réseaux sociaux pour votre boutique durant une semaine deux fois." />
                    <BoxPrice tarif='Annuel' price='70$' text="Avec cette offre, vous bénéficiez d'une annee pour publier vos articles et d'une publicité sur nos réseaux sociaux pour votre boutique durant une semaine six fois." />
                </section>

            </Container>
            <main className='bg-white'>
                <Container>
                    <section className='grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-20  py-5 md:py-20 '>
                        <article className='text-left col-span-2'>
                            <Title>Témoignages de clients abonnés : Des voix qui comptent</Title>
                            <Text>Ne nous croyez pas sur parole, découvrez ce que nos clients abonnés ont à dire !.</Text>
                        </article>
                        <article className='space-y-5 col-span-3'>
                            <div className='rounded-sm p-10 space-y-5  bg-primary/5'>
                                <Text>Depuis que je suis abonné(e), j'ai ne me casse plus la tête pour promouvoir mes produits. Je ne pourrais plus me passer de ce service</Text>
                                <Text weight='font-medium' className='text-primary'>Maison COCO CHANEL</Text>
                            </div>
                            <div className='rounded-sm p-10 space-y-5  bg-primary/5'>
                                <Text>Le système d'abonnement est tellement flexible qu'il correspond parfaitement à mes besoins. Je recommande vivement !</Text>
                                <Text weight='font-medium' className='text-primary'>Maison COCO CHANEL</Text>
                            </div>
                            <div className='rounded-sm p-10 space-y-5  bg-primary/5'>
                                <Text>J'apprécie particulièrement la commodité et la simplicité de la platform. C'est tellement facile à utiliser !</Text>
                                <Text weight='font-medium' className='text-primary'>Maison COCO CHANEL</Text>
                            </div>
                        </article>
                    </section>
                </Container>
            </main>
        </main>
    )
}
