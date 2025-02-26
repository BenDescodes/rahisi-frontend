import { Button, Text, Title } from "@/components/atoms"
import { IconRond } from "@/components/molecules"
import React from "react"
import { BiArrowBack } from "react-icons/bi"

export default function Compte() {
    return (
        <main className="">
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-between items-start">
                    <div>
                        <Title>VOS INFORMATIONS</Title>
                        {/* <Text className="text-xs">Veuillez entrez tous vos informations (* case obligatoire)</Text> */}
                    </div>
                    <div>
                        <IconRond icon={<BiArrowBack />} href="/admin" />
                    </div>
                </div>
            </section>
            <hr />
            <section className="bg-three/40">
                <article className="grid grid-cols-2 p-3 border-b">
                    <div>
                        <Text>Nom du magasin </Text>{" "}
                    </div>
                    <div>
                        <Text>Collector Clothes Design</Text>{" "}
                    </div>
                </article>
                <article className="grid grid-cols-2 p-3 border-b">
                    <div>
                        <Text>Proprietaire</Text>{" "}
                    </div>
                    <div>
                        <Text>Helene Bonda</Text>{" "}
                    </div>
                </article>
                <article className="grid grid-cols-2 p-3 border-b">
                    <div>
                        <Text>Categorie</Text>{" "}
                    </div>
                    <div>
                        <Text>Habillement et Accessoire</Text>{" "}
                    </div>
                </article>
                <article className="grid grid-cols-2 p-3 border-b">
                    <div>
                        <Text>Logo</Text>{" "}
                    </div>
                    <div>
                        <Text>.</Text>{" "}
                    </div>
                </article>
            </section>
            <section className="bg-three rounded-sm w-full">
                <div className="px-5 py-4 flex justify-end space-x-5">
                    <Button href="/admin/compte/443">Modifier information</Button>
                    <Button href="/admin/compte/353">Modifier mot de passe</Button>
                </div>
            </section>
        </main>
    )
}
