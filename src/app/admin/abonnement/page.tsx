import { Button, Text, Title } from '@/components/atoms'
import { IconRond } from '@/components/molecules'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function Abonnement() {
    return (
        <main className=''>
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-between items-start">
                    <div>
                        <Title>VOTRE ABONNEMENT</Title>
                        {/* <Text className="text-xs">Veuillez entrez tous vos informations (* case obligatoire)</Text> */}
                    </div>
                    <div>
                        <IconRond icon={<BiArrowBack />} href='/admin' />
                    </div>
                </div>
            </section>
            <hr />
            <section className="bg-three/40">
                <article className='grid grid-cols-2 p-3 border-b'>
                    <div><Text>Type Abonnement </Text> </div>
                    <div><Text>Semestre</Text> </div>
                </article>
                <article className='grid grid-cols-2 p-3 border-b'>
                    <div><Text>Date Achat</Text> </div>
                    <div><Text>02 Janvier 2024</Text> </div>
                </article>
                <article className='grid grid-cols-2 p-3 border-b'>
                    <div><Text>Date Expiration</Text> </div>
                    <div><Text>02 Juillet 2024</Text> </div>
                </article>

            </section>
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-end space-x-5">
                    <Button href='/abonnement'>Reabonner</Button>
                </div>
            </section>
        </main>
    )
}
