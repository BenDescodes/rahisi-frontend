import { ButtonForm, Text, Title } from '@/components/atoms'
import { Banner, InputIcon } from '@/components/molecules'
import Link from 'next/link'
import React from 'react'
import { BsShieldLock } from 'react-icons/bs'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'

export default function ChangePassword() {
    return (
        <>
            <Banner text='ESPACE VENDEUR' />
            <section className={`bg-white min-w-full py-10 flex justify-center items-center`}>
                <div className=" w-11/12 md:w-4/12 h-auto rounded-md bg-white dark:bg-black ">
                    <div>
                        <Title className="text-xl pb-5 text-center">CHANGER LE MOT DE PASSE</Title>
                        <form action="" method="post" className="space-y-5">
                            <InputIcon text={"Mot de passe"} type='password' icon={<BsShieldLock />} className="focus:border-l-primary focus:border-l-4 " />
                            <InputIcon text={"Repeter le mot de passe"} type='password' icon={<BsShieldLock />} className="focus:border-l-primary focus:border-l-4 " />
                            <div className='w-5/5 flex justify-between items-center'>
                                <ButtonForm icon={<MdOutlinePublishedWithChanges />} text={"Changer"} color='bg-primary' type='button' />
                                <Link href='/login'>
                                    <Text color='text-primary'>Se connecter</Text>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
