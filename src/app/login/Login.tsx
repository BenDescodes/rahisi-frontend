import { ButtonForm, Text, Title } from '@/components/atoms'
import { InputIcon } from '@/components/molecules'
import React from 'react'
import { BsPerson, BsShieldLock } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
interface Props {
    handleChangePage: (e: string) => void
}
export default function Login({ handleChangePage }: Props) {
    return (
        <>
            <Title className="text-xl pb-5 text-center">SE CONNECTER</Title>
            <form action="" method="post" className="space-y-5">
                <InputIcon text={"Votre Email ou Numero WhatsApp"} icon={<BsPerson />} className="focus:border-l-primary focus:border-l-4" />
                <InputIcon text={"Mot de passe"} type='password' icon={<BsShieldLock />} className="focus:border-l-primary focus:border-l-4 " />
                <div className='flex justify-between'>
                    <div onClick={() => handleChangePage('forgetPassword')} className='cursor-pointer'>
                        <Text color='text-primary'>Mot de passe oublié</Text>
                    </div>
                    <div onClick={() => handleChangePage('register')} className='cursor-pointer'>
                        <Text color='text-primary'>S'inscrire</Text>
                    </div>
                </div>
                <div className='w-5/5'>
                    <ButtonForm icon={<BiLogIn />} text={"Se Connecter"} color='bg-primary' type='button' />
                </div>
            </form>
        </>
    )
}
