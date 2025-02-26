import React from 'react'
import { Text, Title } from '@/components/atoms'
import { FormulaireArticle } from '@/components/organisms'
import { IconRond } from '@/components/molecules'
import { BiArrowBack } from 'react-icons/bi'

export default function Home() {
    return (

        <main className=''>
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-between items-start">
                    <div>
                        <Title>AJOUTER ARTICLE</Title>
                        <Text className="text-xs">Veuillez entrez tous vos informations (* case obligatoire)</Text>
                    </div>
                    <div>
                        <IconRond icon={<BiArrowBack />} href='/admin' />
                    </div>
                </div>
            </section>
            <hr />
            <div className="">
                <FormulaireArticle />
            </div>
        </main>

    )
}
