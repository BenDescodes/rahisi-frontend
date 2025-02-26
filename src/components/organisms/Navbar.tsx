"use client"
import React, { useState } from "react"
import { Container, Icon, Links, Title } from "../atoms"
import { PiListPlus } from "react-icons/pi"
import { BsFacebook, BsHeart, BsYoutube } from "react-icons/bs"
import Link from "next/link"
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io"

export function Navbar() {
    const [menu, setMenu] = useState(true)
    const handleClick = () => {
        setMenu(!menu)
    }
    return (
        <>
            <section className="shadow-md border-b-4 border-b-primary ">
                <Container>
                    <article className="flex justify-between items-center text-black py-2 md:py-0">
                        <div className="w-5/12 md:w-3/12">
                            <Title>RAHISI STYLE</Title>
                        </div>
                        <div className="hidden md:flex justify-between w-6/12 text-sm">
                            <Links href="/">ACCUEIL</Links>
                            <Links href="/boutique">BOUTIQUE</Links>
                            <Links href="/apropos">A PROPOS</Links>
                            <Links href="/abonnement">ABONEMENT</Links>
                            <Links href="/contact">CONTACT</Links>
                        </div>
                        <div className="w-2/12 flex justify-end ">
                            <Link href="/wishlist">
                                <Icon
                                    icon={<BsHeart />}
                                    className="text-base w-8 h-8 flex justify-center items-center bg-primary rounded-full text-white"
                                />
                            </Link>
                        </div>
                        <article className="block lg:hidden ">
                            <button onClick={handleClick}>
                                <Icon icon={<PiListPlus />} className={"text-4xl"} />
                            </button>
                        </article>
                    </article>
                </Container>
            </section>
            <main onClick={handleClick}>
                <section
                    className={`fixed  top-0  w-full max-w-[100vw] h-screen z-20 flex transition-all duration-500 ${
                        menu ? "right-[-100%]" : "right-0"
                    }  lg:hidden  bg-gray-800/95`}
                >
                    <article className=" flex flex-col justify-center items-center w-full  font-semibold relative text-center space-y-10 px-20 text-white ">
                        <Links href="/">ACCUEIL</Links>
                        <Links href="/boutique">BOUTIQUE</Links>
                        <Links href="/apropos">A PROPOS</Links>
                        <Links href="/abonnement">ABONEMENT</Links>
                        <Links href="/contact">CONTACT</Links>
                        <aside className="border-t w-full py-7 border-t-gray-200 flex justify-center items-center space-x-10">
                            <Icon className="text-xl" icon={<BsFacebook />} />
                            <Icon className="text-xl" icon={<IoLogoWhatsapp />} />
                            <Icon className="text-xl" icon={<BsYoutube />} />
                        </aside>
                        <aside className="block lg:hidden absolute -top-2 right-4">
                            <button onClick={handleClick} className="border-1 border-gray-400">
                                <Icon icon={<IoMdClose />} className="text-4xl" />
                            </button>
                        </aside>
                    </article>
                </section>
            </main>
        </>
    )
}
