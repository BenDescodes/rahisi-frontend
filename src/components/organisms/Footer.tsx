import React from "react"
import { Container, Title, Text, Icon, Links } from "../atoms"
import { IconText } from "../molecules"
import { FaEnvelopesBulk, FaPhone } from "react-icons/fa6"
import { ImFacebook } from "react-icons/im"
import { IoLogoWhatsapp } from "react-icons/io"
import { RiInstagramFill, RiTiktokFill } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    return (
        <main className="bg-primary/5">
            <Container className="py-8">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 text-center">
                    <article className="">
                        <Title>RAHISI STYLE</Title>
                        <div className="flex flex-col items-center lg:items-start space-y-5">
                            <Text className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam a quam blanditiis
                                praesentium
                            </Text>
                            <IconText icon={<FaEnvelopesBulk />} classText="text-sm font-medium" text="contact@rahisi.com" />
                            <IconText icon={<FaPhone />} classText="text-sm font-medium" text="+243 894590707" />
                        </div>
                    </article>
                    <article className="flex flex-col items-center lg:items-start">
                        <Title>COLLECTION</Title>
                        <div className="flex flex-col items-center lg:items-start space-y-3">
                            <Text>Hommes</Text>
                            <Text>Femmes</Text>
                            <Text>Enfants</Text>
                            <Text>Accesoires</Text>
                        </div>
                    </article>
                </section>
            </Container>
            <hr />
            <Container>
                <section className="py-2">
                    <article className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
                        <div className="pt-5 md:pt-0">
                            <Text className="text-gray-600">Copyright © 2024 RAHISI COORPORATION</Text>
                        </div>
                        <div className="flex space-x-10 items-center">
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
                </section>
            </Container>
        </main>
    )
}
