import React from 'react'
import LinkMenu from './LinkMenu'

export function SideBar() {
    //state

    //comportement
    const links = [
        /*  {
             name : "Dashboard",
             link : "/Dasboard",
             icon : <LuLayoutDashboard/>,
             submenu : false,
         }, */
        {
            name: "ARTICLES",
            submenu: true,
            sublink: [
                { title: "Ajouter article", link: "/admin/article" },
                { title: "Liste article", link: "/admin/article/liste" },
                { title: "Statistique", link: "/admin/article/statistique" },
            ],
        },
        {
            name: "ABONNEMENT",
            submenu: true,
            sublink: [
                { title: "Voir", link: "/admin/abonnement" },
            ]
        },
        {
            name: "COMPTES",
            submenu: true,
            sublink: [
                { title: "Voir", link: "/admin/compte" },
            ]
        }
    ]
    //rendu
    return (
        <nav className='w-10/12 md:w-2/12 hidden md:block'>
            <section className='w-full h-min hidden md:block sticky top-4'>
                <LinkMenu name='ACCUEIL' lien='/admin' submenu={false} />
                {links.map((items, index) => (
                    <LinkMenu name={items.name} submenu={items.submenu} sublink={items.sublink} key={index} />
                ))}
            </section>
        </nav>
    )
}
