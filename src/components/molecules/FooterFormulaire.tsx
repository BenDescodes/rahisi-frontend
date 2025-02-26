import { ReactNode } from 'react'
interface FooterFormulaireProps{
    children : ReactNode
}
export function FooterFormulaire({children}:FooterFormulaireProps) {
    return (
        <>
            <hr className="pb-4" />
            <div className="flex pb-5 px-6">
                <div className="md:w-1/4"></div>
                <div className="flex space-x-5">
                    {children}
                </div>
            </div>
        </>
    )
}
