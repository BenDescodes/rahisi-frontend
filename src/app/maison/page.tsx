import { ButtonForm, Container } from '@/components/atoms'
import { Banner, BoxMaison, InputText, Select } from '@/components/molecules'
import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'

export default function Maison() {
    return (
        <>
            <Banner text='MAISON DES VENTES ' />
            <Container>
                <main className='flex justify-between items-center flex-col md:flex-row mt-2 py-2 px-2 z-10 bg-white '>
                    {/* <div>
                    <ButtonForm icon={<HiMinusSmall />} color={'bg-primary'} text={'Filtre'} type='button' />
                </div> */}
                    <div className='grid grid-cols-2 gap-4 w-full md:w-2/5'>
                        <div>
                            <Select text='Categorie'>
                                <option value="">Categories</option>
                                <option>Homme</option>
                                <option>Femme</option>
                            </Select>
                        </div>
                        {/* <div>
                        <Select text='Type'>
                            <option value="">Types</option>
                            <option>Chaussure</option>
                            <option>Pantalon</option>
                            <option>Ketch</option>
                        </Select>
                    </div> */}
                    </div>
                    <div className='w-full md:w-1/4'>
                        <InputText text='Recherche' type='text' />
                    </div>
                </main>
                <section className='grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
                    <BoxMaison href='/maison/1' categorie='Habillement et Accessoire' logo='/img/logoe.png' image='/img/maison.jpg' title='Venantis veulum' libelle='Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis ' />
                    <BoxMaison href='/maison/1' categorie='Maison de couture' logo='/img/logoe.png' image='/img/maison.jpg' title='Hac fames tempor' libelle='Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam' />
                    <BoxMaison href='/maison/1' categorie='Accesoire' logo='/img/logoe.png' image='/img/maison.jpg' title='Condentum Integer' libelle='Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper ar' />
                    <BoxMaison href='/maison/1' categorie='Maison de couture' logo='/img/logoe.png' image='/img/maison.jpg' title='Hac fames tempor' libelle='Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam' />
                    <BoxMaison href='/maison/1' categorie='Accesoire' logo='/img/logoe.png' image='/img/maison.jpg' title='Condentum Integer' libelle='Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper ar' />
                </section>
                <section className='flex justify-center pt-10'>
                    <ButtonForm text='Voir Plus' icon={<BiArrowToBottom />} color='bg-primary' />
                </section>
            </Container>
        </>
    )
}
