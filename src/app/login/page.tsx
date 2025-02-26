'use client'
import { ButtonForm, Icon, Text, Title } from '@/components/atoms'
import { Banner } from '@/components/molecules'
import { InputIcon } from '@/components/molecules'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiArrowFromLeft, BiArrowToLeft, BiLogIn } from 'react-icons/bi'
import { BsEnvelopeAt, BsEnvelopeAtFill, BsFillPeopleFill, BsFloppy, BsPerson, BsPinMap, BsShieldLock, BsShop, BsWhatsapp } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'
import { IoKey } from 'react-icons/io5'
import { MdOutlinePublishedWithChanges, MdSettingsBackupRestore } from 'react-icons/md'
import Register from './Register'
import Login from './Login'
import ForgetPassword from './ForgetPassword'

export default function Home() {
    //state
    const [login, setLogin] = useState<string>('register')
    //comportement
    const handleChangePage = (pageElement: string) => setLogin(pageElement)
    //rendu
    return (
        <>
            <Banner text='ESPACE VENDEUR' />
            <section className={`bg-white min-w-full py-10 flex justify-center items-center`}>
                <div className=" w-11/12 md:w-4/12 h-auto rounded-md bg-white dark:bg-black ">
                    <div className={`${login === 'register' ? 'block' : 'hidden'} duration-200 `}>
                        <Register handleChangePage={handleChangePage} />
                    </div>
                    <div className={`${login === 'login' ? 'block' : 'hidden'}`}>
                        <Login handleChangePage={handleChangePage} />
                    </div>
                    <div className={`${login === 'forgetPassword' ? 'block' : 'hidden'}`}>
                        <ForgetPassword handleChangePage={handleChangePage} />
                    </div>
                </div>
            </section>
        </>
    )
}
