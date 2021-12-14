// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import { IoIcons }  from 'react-icons/io'
import { FaBeer } from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Strona Glowna',
        path: '/',
        icon: <FaBeer />,
        cName: 'nav-text',
    },
    {
        title: 'Dla Pracownikow',
        path: '/aboutworker',
        icon: <FaBeer />,
        cName: 'nav-text',
        subNaV: [
            {     
                title: 'Dla Pracownika',
                path: '/aboutworker',
                cName: 'nav-text-drop'
            },
            {   title: 'Praca Stala',
                path: '/work/permanent',
                cName: 'nav-text-drop'
            },
            {
                title: 'Praca Tymczasowa',
                path: '/work/temporary',
                cName: 'nav-text-drop'
            },
            {
                title: 'Szkolenie',
                path: '/work/training',
                cName: 'nav-text-drop'  
            },
            {
                title: 'Praca za granica',
                path: '/work/abroad',
                cName: 'nav-text-drop',
            },
            {
                title: 'Oferty Pracy',
                path: '/work/offerts',
                cName: 'nav-text-drop',
            }
        ]
    },
    {
        title: 'Dla Pracodawcow',
        path: '/foremployer',
        icon: <FaBeer />,
        cName: 'nav-text',
        subNaV: [
            {
                title: 'Leasing',
                path: '/work/leasing',
                cName: 'nav-text-drop',
            },
            {
                title: 'Rekrutacja',
                path: '/work/recruitment',
                cName: 'nav-text-drop',
            },
            {
                title: 'Doradztwo',
                path: '/work/counseling',
                cName: 'nav-text-drop',
            }

        ]
    },
    {
        title: 'Kontakt',
        path: '/contact',
        icon: <FaBeer />,
        cName: 'nav-text'
    }
]
export const AboutWorker = [ 
    {   
        title: 'Dla Pracownika',
        path: '/aboutworker',
        cName: 'nav-text-drop'
    },
    {   
        title: 'Praca Stala',
        path: '/work/permanent',
        cName: 'nav-text-drop'
    },
    {   
        title: 'Praca Tymczasowa',
        path: '/work/temporary',
        cName: 'nav-text-drop'
    },
    {   
        title: 'Szkolenie',
        path: '/work/training',
        cName: 'nav-text-drop'
    },
    {   
        title: 'Praca za granica',
        path: '/work/abroad',
        cName: 'nav-text-drop',
    },
    {   
        title: 'Oferty Pracy',
        path: '/work/offerts',
        cName: 'nav-text-drop',
    },
]
export const ForEmployer = [ 
    { 
        title: 'Dla Pracodawcy',
        path: '/foremployer',
        cName: 'nav-text-drop',
    },
    {
        title: 'Leasing',
        path: '/work/leasing',
        cName: 'nav-text-drop',
    },
    {
        title: 'Rekrutacja',
        path: '/work/recruitment',
        cName: 'nav-text-drop',
    },
    {
        title: 'Doradztwo',
        path: '/work/counseling',
        cName: 'nav-text-drop',
    }
]