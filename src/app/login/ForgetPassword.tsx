import { ButtonForm, Text, Title } from '@/components/atoms'
import { InputIcon } from '@/components/molecules'
import React from 'react'
import { BsEnvelopeAt } from 'react-icons/bs'
import { MdSettingsBackupRestore } from 'react-icons/md'
interface Props {
    handleChangePage: (e: string) => void
}
export default function ForgetPassword({ handleChangePage }: Props) {
    return (
        <>
            <Title className="text-xl pb-5 text-center">MOT DE PASSE OUBLIER</Title>
            <form action="" method="post" className="space-y-5">
                <InputIcon text={"Inserer votre mail"} icon={<BsEnvelopeAt />} type='email' className="focus:border-l-primary focus:border-l-4" />
                <div className='w-5/5 flex justify-between items-center'>
                    <ButtonForm type='button' icon={<MdSettingsBackupRestore />} text={"Recupérer"} color='bg-primary' />
                    <div onClick={() => handleChangePage('login')} className='cursor-pointer'>
                        <Text color='text-primary'>Se connecter</Text>
                    </div>
                </div>
            </form>
        </>
    )
}
