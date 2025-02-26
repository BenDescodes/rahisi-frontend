import { ButtonForm, Text, Title } from "@/components/atoms";
import { Banner, BoxArticle, InputText, Select } from "@/components/molecules";
import React from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";

export default function page() {
  return (
    <>
      <Banner text="BOUTIQUE" />
      <main className="flex justify-between items-center flex-col md:flex-row mt-2 py-2 px-2 z-10 bg-white ">
        <div>
          <ButtonForm icon={<HiMinusSmall />} color={"bg-primary"} text={"Filtre"} type="button" />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-2/5">
          <div>
            <Select text="Categorie">
              <option value="">Categories</option>
              <option>Homme</option>
              <option>Femme</option>
            </Select>
          </div>
          <div>
            <Select text="Type">
              <option value="">Types</option>
              <option>Chaussure</option>
              <option>Pantalon</option>
              <option>Ketch</option>
            </Select>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <InputText text="Recherche" type="text" />
        </div>
      </main>
      <main className="flex space-x-3 py-5 relative">
        <section className="w-0 md:w-2/12 h-min hidden md:block sticky top-4 pl-3">
          <section className="mb-5">
            <Text weight="font-medium" className="text-lg border-b-2 pb-3 border-primary">
              CATEGORIE
            </Text>
            <article className="space-y-2 pt-5">
              <div className="flex justify-between">
                <Text weight="font-medium">Homme</Text>
                <Text weight="font-medium">507</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Femme</Text>
                <Text weight="font-medium">454</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Enfant</Text>
                <Text weight="font-medium">24</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Accessoires</Text>
                <Text weight="font-medium">59</Text>
              </div>
              <hr />
            </article>
          </section>
          <section className="bg-primary/5 h-96 w-full"></section>
          <section className="mb-5">
            <Text weight="font-medium" className="text-lg border-b-2 pt-3 pb-3 border-primary">
              NOUVEAU PRODUIT
            </Text>

            <article className="space-y-2 pt-5">
              <div className="flex justify-between">
                <Text weight="font-medium">Homme</Text>
                <Text weight="font-medium">507</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Femme</Text>
                <Text weight="font-medium">454</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Enfant</Text>
                <Text weight="font-medium">24</Text>
              </div>
              <hr />
              <div className="flex justify-between">
                <Text weight="font-medium">Accessoires</Text>
                <Text weight="font-medium">59</Text>
              </div>
              <hr />
            </article>
          </section>
        </section>
        <section className="w-full md:w-10/12">
          <section>
            {/* <hr className='pb-5' /> */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 pr-2">
              <BoxArticle image={"/img/pro2.webp"} catgeorie="Robe" text="Robe Hermest" prix="95 000" currency="CDF" nouveau />
              <BoxArticle image={"/img/pro3.jpg"} catgeorie="Accessoire" text="Shamppoing cheveux" prix="14 500" currency="CDF" favoris />
              <BoxArticle image={"/img/pro4.jpg"} catgeorie="Accessoire" text="Shamppoing cheveux" prix="14 000" currency="CDF" solde />
              <BoxArticle image={"/img/pro1.webp"} catgeorie="Robe" text="Pantalon Joggin" prix="31" currency="USD" />
              <BoxArticle image={"/img/pro5.jpg"} catgeorie="Polo" text="Polo Laurent" prix="10" currency="USD" />
              <BoxArticle image={"/img/pro6.jpg"} catgeorie="Pull" text="Pull Harrare" prix="15" currency="USD" nouveau />
              <BoxArticle image={"/img/pro7.jpg"} catgeorie="Chemise" text="Chemisse Fendi" prix="11" currency="USD" />
              <BoxArticle image={"/img/pro8.webp"} catgeorie="Robe" text="Robe un bras" prix="45" currency="USD" nouveau solde favoris />
              <BoxArticle image={"/img/pro2.webp"} catgeorie="Robe" text="Robe Hermest" prix="95 000" currency="CDF" />
              <BoxArticle image={"/img/pro3.jpg"} catgeorie="Accessoire" text="Shamppoing cheveux" prix="14 500" currency="CDF" nouveau />
              <BoxArticle image={"/img/pro4.jpg"} catgeorie="Accessoire" text="Shamppoing cheveux" prix="14 000" currency="CDF" />
              <BoxArticle image={"/img/pro1.webp"} catgeorie="Robe" text="Pantalon Joggin" prix="31" currency="USD" />
              <BoxArticle image={"/img/pro5.jpg"} catgeorie="Polo" text="Polo Laurent" prix="10" currency="USD" solde />
              <BoxArticle image={"/img/pro6.jpg"} catgeorie="Pull" text="Pull Harrare" prix="15" currency="USD" nouveau solde />
              <BoxArticle image={"/img/pro7.jpg"} catgeorie="Chemise" text="Chemisse Fendi" prix="11" currency="USD" />
              <BoxArticle image={"/img/pro8.webp"} catgeorie="Robe" text="Robe un bras" prix="45" currency="USD" />
            </section>
            <section className="flex justify-center pt-10">
              <ButtonForm text="Voir Plus" icon={<BiArrowToBottom />} color="bg-primary" />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
