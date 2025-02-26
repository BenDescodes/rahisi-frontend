import { jost } from "@/config/config";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    href: string,
    className?: string,
    cat?: 'f' | 'a' | 't'
}
export function Button({ children, href, className, cat }: ButtonProps) {
    switch (cat) {
        //t : transparent et hover color
        case 't':
            return (
                <Link href={href} className={`py-2 md:py-3 px-2 md:px-5 font-semibold text-primary border-2 border-primary bg-transparent hover:bg-primary text-sm duration-200 inline-block hover:text-white hover:border-2 hover:border-primary active:scale-95 ${className} `}>
                    {children}
                </Link>
            )

        //F : sans couleur d'arriere plan
        case 'f':
            return (
                <Link href={href} className={`py-3 px-10 font-semibold text-white border-2 border-white bg-transparent hover:bg-white text-sm duration-200 hover:bg-transparent inline-block hover:text-primary hover:border-2 hover:border-white active:scale-95 ${className} `}>
                    {children}
                </Link>
            )

        //A : Arrondi
        case 'a':
            return (
                <Link href={href} className={`py-1 px-3 rounded-xl font-light text-black  bg-neutral-300  hover:scale-105  text-sm duration-200 hover:bg-transparent inline-block ${className} `}>
                    {children}
                </Link>
            )

        //avec fond orange et border orange 
        default:
            return (
                <Link href={href} className={`py-2 md:py-3 px-2 md:px-5 font-semibold text-white border-2 border-primary bg-primary text-sm duration-200 hover:bg-transparent inline-block hover:text-primary hover:border-2 hover:border-primary ${className} `}>
                    {children}
                </Link>
            )

    }
}
