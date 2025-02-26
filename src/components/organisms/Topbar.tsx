import React from "react"
import { Container, Icon, Text } from "../atoms"
import { ImFacebook } from "react-icons/im"
import { RiInstagramFill, RiTiktokFill } from "react-icons/ri"
import { IoLogoWhatsapp } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"

export function Topbar() {
    return (
        <main className="bg-primary/10">
            <Container>
                <article className="flex justify-between md:justify-between items-center">
                    <div className="">
                        <Link href="/login">
                            <Text className="py-1 px-2 md:px-10 bg-primary text-white text-sm md:text-base">
                                Créer votre Boutique
                            </Text>
                        </Link>
                    </div>
                    <div className="flex space-x-10 items-center py-2 md:py-0">
                        <Text cat="i" className="hidden md:block">
                            Nous sommes aussi sur :
                        </Text>
                        <Link href="#">
                            <Image src={"/img/facebook.png"} alt="facebook" width={20} height={20} />
                        </Link>
                        <Link href="#">
                            <Image src={"/img/whatsapp.png"} alt="facebook" width={20} height={20} />
                        </Link>
                        <Link href="#">
                            <Image src={"/img/instagram.png"} alt="facebook" width={20} height={20} />
                        </Link>
                        <Link href="#">
                            <Image src={"/img/tiktok.png"} alt="facebook" width={20} height={20} />
                        </Link>
                    </div>
                </article>
            </Container>
        </main>
    )
}
