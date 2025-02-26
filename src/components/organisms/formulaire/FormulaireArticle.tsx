import { ButtonForm } from '@/components/atoms'
import { InputText, Select, FooterFormulaire } from '@/components/molecules'
import { RxCheck, RxCross2 } from 'react-icons/rx'


export function FormulaireArticle() {
    return (
        <form action="" method="post" className='bg-three/40 '>
            <section className='px-6 py-1'>
                <InputText text='Nom Article *' type='text' required />
                <InputText text='prix *' type='number' required />
                <InputText text='Taille * ' type='text' required />
                <Select text={'Categorie'}>
                    <option value="">- - Selectionner categorie - - </option>
                    <option value='Pasteur'>Homme</option>
                    <option value='Pasteur'>Femme</option>
                </Select>
                <Select text={'Types'}>
                    <option value="">- - Selectionner type - - </option>
                    <option value='Pasteur'>Chaussure</option>
                    <option value='Pasteur'>Robe</option>
                    <option value='Pasteur'>Chemise</option>
                    <option value='Pasteur'>T-Shirt</option>
                </Select>
                <InputText text='Image Premiere * ' type='url' />
                <InputText text='Image details * ' type='url' required />

            </section>
            <FooterFormulaire>
                <ButtonForm icon={<RxCheck />} color='bg-primary' text='Enregistrer' />
                <ButtonForm type="reset" icon={<RxCross2 />} color='bg-red-600' text='Annuler' />
            </FooterFormulaire>
        </form>
    )
}