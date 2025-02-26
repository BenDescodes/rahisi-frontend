import { ButtonForm } from '@/components/atoms'
import { FooterFormulaire, InputText, Select } from '@/components/molecules'
import React from 'react'
import { RxCheck, RxCross2 } from 'react-icons/rx'

export default function FormulaireCompteInformation() {
    return (
        <form action="" method="post" className='bg-three/40 '>
            <section className='px-6 py-1'>
                <InputText text='Nom du Proprietaire *' required />
                <InputText text='Nom du Magasin *' required />
                <InputText text='Adresse Physique *' />
                <InputText text='WhatsApp Maison *' type='tel' required />
                <InputText text='Email ' type='email' required />
                <Select text={'Categorie *'}>
                    <option value="">- - Selectionner categorie - - </option>
                    <option value='Pasteur'>Habillement</option>
                    <option value='Pasteur'>Accesoire de mode</option>
                </Select>
                <Select text={'Livraison à Domicile *'}>
                    <option value="">- - Proposer des livraisons - - </option>
                    <option value='Pasteur'>Non</option>
                    <option value='Pasteur'>Oui</option>
                </Select>
                <InputText text='Photo du magasin ' type='file' />
                <InputText text='Logo' type='file' required />
                <InputText text="Heure d'ouverture" type='time' />
                <InputText text="Heure de fermeture" type='time' />
                <InputText text="Page Facebook" type='url' />
                <InputText text="Page Instagram" type='url' />
                <InputText text="Page TikTok" type='url' />
            </section>
            <FooterFormulaire>
                <ButtonForm icon={<RxCheck />} color='bg-green-600' text='Modifier' />
                <ButtonForm type="reset" icon={<RxCross2 />} color='bg-red-600' text='Annuler' />
            </FooterFormulaire>
        </form>
    )
}
