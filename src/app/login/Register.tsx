import { ButtonForm, Text, Title } from '@/components/atoms'
import { InputIcon } from '@/components/molecules'
import React from 'react'
import { BsEnvelopeAt, BsFloppy, BsPerson, BsPinMap, BsShieldLock, BsShop, BsWhatsapp } from 'react-icons/bs'
interface Props {
    handleChangePage: (e: string) => void
}
export default function Register({ handleChangePage }: Props) {
    return (
        <>
            <Title className="text-xl pb-5 text-center">ENREGISTRER VOTRE MAGASIN</Title>
            <form action="" method="post" className="space-y-5">
                <InputIcon text={"Votre nom"} icon={<BsPerson />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"Nom du magasin"} icon={<BsShop />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"Adresse du magasin"} icon={<BsPinMap />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"Whatsapp du Magasin"} type='tel' icon={<BsWhatsapp />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"E-mail"} type='email' icon={<BsEnvelopeAt />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"Mot de passe"} type='password' icon={<BsShieldLock />} className="focus:border-l-primary focus:border-l-4 " />
                <InputIcon text={"Repeter le mot de passe"} type='password' icon={<BsShieldLock />} className="focus:border-l-primary focus:border-l-4 " />
                <div className='w-5/5 flex justify-between items-center'>
                    <ButtonForm icon={<BsFloppy />} text={"Enregistrer"} color='bg-primary' type='button' />
                    <div onClick={() => handleChangePage('login')} className='cursor-pointer'>
                        <Text color='text-primary'>Se connecter</Text>
                    </div>
                </div>
            </form>
        </>
    )
}
