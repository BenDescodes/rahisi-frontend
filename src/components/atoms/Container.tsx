import React, { ReactNode } from 'react'
interface ContainerProps {
    children: ReactNode,
    className?: string
}
export function Container({ children, className }: ContainerProps) {
    return (
        <section className={`container w-11/12 md:w-11/12 lg:w-11/12 mx-auto ${className}`}>
            {children}
        </section>
    )
}
