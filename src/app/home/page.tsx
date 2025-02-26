import { Button, Container, Links, Text, Title } from "@/components/atoms"
import Image from "next/image"
import React from "react"
import paysage from "../../../public/img/paysage.jpg"
import { MdFavorite } from "react-icons/md"
import { BoxArticle, BoxMaison, IconText, Separateur } from "@/components/molecules"
import femme from "../../../public/img/femme.jpg"
import { BsShop } from "react-icons/bs"
export default function Home() {
    return (
        <>
            <main className="bg-[url('/img/paysage.jpg')] bg-center  bg-cover h-[89vh]  ">
                <Container>
                    <section className="flex justify-center items-center h-full">
                        <article className="w-2/5 md:w-2/4"></article>
                        <article className="w-3/5 md:w-2/4 text-white flex flex-col justify-center h-[86vh] space-y-5">
                            <Title cat="m">Rahisi Style</Title>
                            <Title className="text-black text-xl md:text-6xl">
                                TROUVER LES <span className="text-primary">MEILLEURS</span> ARTICLES SANS VOUS{" "}
                                <span className="text-primary">DEPLACEZ</span>
                            </Title>
                            <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0 w-auto">
                                <div>
                                    <Button href="#">BOUTIQUE</Button>
                                </div>
                                <div>
                                    <Button href="#" cat="t">
                                        CREER VOTRE BOUTIQUE
                                    </Button>
                                </div>
                            </div>
                        </article>
                    </section>
                </Container>
            </main>
            <main className="py-20">
                <article className="text-center flex flex-col space-y-5 md:space-y-0 items-center mb-5">
                    <Title cat="m">Qui nous sommes ?</Title>
                    <Title className="text-3xl">PLATFORM POUR LES BOUTIQUES D'HABILLEMENT</Title>
                    <div className="w-full md:w-3/5 flex justify-center">
                        <Text align="text-center">
                            Nous sommes une plaforme de publicité en ligne qui promouvois les boutiques d’habillement à fin
                            d’attirer plus des clientèles. RAHISI se charge de proposer vos produits à des clients potentiels en
                            ligne afin de permettre l’ecroulement rapide en toute securité.
                        </Text>
                    </div>
                    <Separateur link="/apropos" text="A PROPOS DE NOUS" />
                </article>

                <article className="pt-10 grid grid-col-1 md:grid-cols-2 gap-4">
                    <div className=" text-white px-5 relative bg-[url('/img/hetf.jpg')] h-[550px] bg-center bg-cover">
                        <div className="absolute bottom-20 left-0">
                            <Text className="text-white bg-primary/75 text-lg p-2 rounded-sm">
                                COLLECTION POUR HOMME ET FEMME{" "}
                            </Text>
                        </div>
                    </div>
                    <aside className="grid grid-rows-2 gap-5">
                        <div className="bg-neutral-300 relative py-10 px-8 h-[250px] md:h-auto text-white bg-no-repeat bg-cover bg-center bg-[url('/img/accessoire.jpg')]">
                            <div className="absolute right-8 bottom-6">
                                <Text className="text-white bg-primary/75 text-lg p-2 rounded-sm">
                                    ASSORTIMENT DES ACCESSOIRES{" "}
                                </Text>
                            </div>
                        </div>
                        <div className="bg-neutral-300 py-10 px-8 h-[250px] md:h-auto text-white relative bg-cover bg-center bg-[url('/img/kid.jpg')]">
                            <div className="absolute left-8 bottom-6">
                                <Text className="text-white bg-primary/75 text-lg p-2 rounded-sm">
                                    LES ENFANT NE SONT PAS OUBLIE
                                </Text>
                            </div>
                        </div>
                    </aside>
                </article>
            </main>
            <main>
                <Container className="py-2 md:py-10">
                    <article className="flex items-center justify-center pb-5">
                        <div className="text-center flex flex-col items-center mb-5">
                            {/* <Title cat='m'>Qui nous sommes ?</Title> */}
                            <Title className="text-3xl">DERNIERS ARTICLES</Title>
                            <div className="w-full md:w-3/5 flex justify-center">
                                <Text align="text-center">
                                    Découvrez une sélection exquise d'articles de vente qui sauront captiver votre imagination et
                                    rehausser votre style.
                                </Text>
                            </div>
                            <Separateur link="/boutique" text="VOIR NOTRE BOUTIQUE" />
                        </div>
                        <div className="w-3/5 flex justify-between hidden">
                            <Links href="#" className="text-primary text-xs">
                                TOUS
                            </Links>
                            <Links href="#" className="text-xs">
                                CHAUSSURE
                            </Links>
                            <Links href="#" className="text-xs">
                                PANTALON
                            </Links>
                            <Links href="#" className="text-xs">
                                SAC
                            </Links>
                            <Links href="#" className="text-xs">
                                MONTRE
                            </Links>
                            <Links href="#" className="text-xs">
                                T-SHIRT
                            </Links>
                            <Links href="#" className="text-xs">
                                CHAUSSETTE
                            </Links>
                        </div>
                    </article>
                    <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <BoxArticle
                            image={"/img/pro2.webp"}
                            catgeorie="Robe"
                            text="Robe Hermest"
                            prix="95 000"
                            currency="CDF"
                            nouveau
                        />
                        <BoxArticle
                            image={"/img/pro3.jpg"}
                            catgeorie="Accessoire"
                            text="Shamppoing cheveux"
                            prix="14 500"
                            currency="CDF"
                        />
                        <BoxArticle
                            image={"/img/pro4.jpg"}
                            catgeorie="Accessoire"
                            text="Shamppoing cheveux"
                            prix="14 000"
                            currency="CDF"
                            solde
                        />
                        <BoxArticle image={"/img/pro1.webp"} catgeorie="Robe" text="Pantalon Joggin" prix="31" currency="USD" />
                        <BoxArticle image={"/img/pro5.jpg"} catgeorie="Polo" text="Polo Laurent" prix="10" currency="USD" />
                        <BoxArticle
                            image={"/img/pro6.jpg"}
                            catgeorie="Pull"
                            text="Pull Harrare"
                            prix="15"
                            currency="USD"
                            nouveau
                        />
                        <BoxArticle image={"/img/pro7.jpg"} catgeorie="Chemise" text="Chemisse Fendi" prix="11" currency="USD" />
                        <BoxArticle
                            image={"/img/pro8.webp"}
                            catgeorie="Robe"
                            text="Robe un bras"
                            prix="45"
                            currency="USD"
                            nouveau
                            solde
                        />
                    </section>
                </Container>
            </main>
            <main className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-5">
                <section className="bg-[url('/img/vendeuse.jpg')] h-[36rem] bg-top bg-cover"></section>
                <section className="px-8 md:px-20 bg-primary/10">
                    <article className="h-[36rem] flex flex-col justify-center space-y-7">
                        <Title className="text-3xl">Faites Connaitres vos produit facilement avec RAHISI STYLE</Title>
                        <Text>
                            Une solution à porter de main pour vendre vos produits en ligne. Créez votre propre boutique
                            d’habillement et commencez à vendre partout au monde. Transformer votre boutique physique en version
                            digitale et atteingnez des nouveaux clients dans le monde 24H/24 tous les jours.
                        </Text>
                        <div>
                            <Button href="#">CREER VOTRE BOUTIQUE</Button>
                        </div>
                    </article>
                </section>
            </main>
            <main className="">
                <Container className="py-16">
                    <div className="text-center flex flex-col items-center mb-5">
                        <Title className="text-3xl">MAISON DES VENTES DISPONIBLES</Title>
                        <div className="w-full md:w-3/5 flex justify-center">
                            <Text align="text-center">
                                Découvrez notre sélection exceptionnelle de maisons d'habillement et d'accessoires disponibles,
                                soigneusement choisies pour répondre à vos besoins uniques en matière de style et de confort.{" "}
                            </Text>
                        </div>
                        <Separateur link="/maison" text="VOIR NOS MAISONS DE VENTE" />
                    </div>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                        <BoxMaison
                            href="/maison/1"
                            categorie="Habillement et Accessoire"
                            logo="/img/logoe.png"
                            image="/img/maison.jpg"
                            title="Venantis veulum"
                            libelle="Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis "
                        />
                        <BoxMaison
                            href="/maison/2"
                            categorie="Maison de couture"
                            logo="/img/logoe.png"
                            image="/img/maison.jpg"
                            title="Hac fames tempor"
                            libelle="Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam"
                        />
                        <BoxMaison
                            href="/maison/3"
                            categorie="Accesoire"
                            logo="/img/logoe.png"
                            image="/img/maison.jpg"
                            title="Condentum Integer"
                            libelle="Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper ar"
                        />
                    </section>
                    {/* <div className='mt-10'>
                        <Button href='#'>BOUTIQUE</Button>
                    </div> */}
                </Container>
            </main>
        </>
    )
}
