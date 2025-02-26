'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
interface LinksProps {
    href: string,
    children: ReactNode,
    className?: string
}
export function Links({ children, href, className }: LinksProps) {
    const url = usePathname()
    return (
        <Link href={href} className={`hover:text-primary font-bold ${url == href && 'text-primary'} ${className}`}>
            {children}
        </Link>
    )
}
