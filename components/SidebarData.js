

import { FaBeer } from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
// import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as IoIosBody from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Strona Glowna',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowUpSFill/> ,
        iconOpend: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text',
        cNameTwo: 'nav-text-long'
    },
    {
        title: 'Dla Pracownikow',
        path: '/aboutworker',
        icon: <IoIcons.IoIosPaper/>,
        iconClosed: <RiIcons.RiArrowUpSFill/> ,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text',
        cNameTwo: 'nav-text-long',
        subNav: [
            {     
                title: 'Dla Pracownika',
                path: '/aboutworker',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {   title: 'Praca Stala',
                path: '/work/permanent',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Praca Tymczasowa',
                path: '/work/temporary',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Szkolenie',
                path: '/work/training',
                cName: 'nav-text-drop',
                icon: <FaBeer />  
            },
            {
                title: 'Praca za granica',
                path: '/work/abroad',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Oferty Pracy',
                path: '/work/offerts',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            }
        ]
    },
    {
        title: 'Dla Pracodawcow',
        path: '/foremployer',
        icon: <IoIcons.IoIosBriefcase/>,
        iconClosed: <RiIcons.RiArrowUpSFill/> ,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text',
        cNameTwo: 'nav-text-long',
        subNav: [
            {
                title: 'Dla Pracodawcow',
                path: '/foremployer',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Leasing',
                path: '/work/leasing',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Rekrutacja',
                path: '/work/recruitment',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            },
            {
                title: 'Doradztwo',
                path: '/work/counseling',
                cName: 'nav-text-drop',
                icon: <FaBeer />
            }

        ]
    },
    {
        title: 'Kontakt',
        path: '/contact',
        icon: <IoIcons.IoIosBody />,
        iconClosed: <RiIcons.RiArrowUpSFill/> ,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text',
        cNameTwo: 'nav-text-long'
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