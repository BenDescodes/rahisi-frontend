import { Button, Icon, Text, Title } from '@/components/atoms'
import { IconRond } from '@/components/molecules'
import FormulaireCompteInformation from '@/components/organisms/formulaire/FormulaireCompteInformation'
import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function OneCompte() {
    return (
        <main className=''>
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-between items-start">
                    <div>
                        <Title>MODIFIER SON COMPTE</Title>
                        <Text className="text-xs">Veuillez entrez tous vos informations (* case obligatoire)</Text>
                    </div>
                    <div>
                        <IconRond icon={<BiArrowBack />} href='/admin/compte' />
                    </div>
                </div>
            </section>
            <hr />
            <div className="">
                <FormulaireCompteInformation />
            </div>
        </main>
    )
}
