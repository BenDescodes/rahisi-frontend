import React, { ReactNode } from 'react'
import { Icon, Text } from '../atoms';

interface IconTextProps {
    text: ReactNode,
    icon: ReactNode,
    classIcon?: string,
    classText?: string,
    cat?: "v" | "t",
    libelle?: string
}

export function IconText({ text, icon, classIcon, classText, cat, libelle }: IconTextProps) {
    switch (cat) {
        //V: verticale (icon, title, text mais en vertical) pour apropos
        case 'v':
            return (
                <article className="space-y-1 flex flex-col  justify-center items-center">
                    <Icon icon={icon} className={`text-white rounded-full p-4 bg-primary ${classIcon}`} />
                    <Text cat='i'>{text}</Text>
                    <Text align='text-center'>{libelle}</Text>
                </article>
            )
            break;
        //T : avec du text pour la page contact (logo, title et text comme lib: libele)
        case 't':
            return (
                <article className="space-y-3 flex flex-col justify-start items-start">

                    <Icon icon={icon} className={` ${classIcon}`} />
                    <Text cat='i' className={`text-neutral-900 text-xl ${classText}`}>{text}</Text>
                    <Text align='text-center'>{libelle}</Text>
                </article>
            )
            break;
        //affichage normal horizontal pour accueil et 
        default:
            return (
                <article className="space-x-3 flex first-letter: justify-start items-center">

                    <Icon icon={icon} className={`text-primary ${classIcon}`} />
                    <Text cat='i' className={`text-neutral-900  font-bold ${classText}`}>{text}</Text>
                </article>
            )
            break;
    }
}