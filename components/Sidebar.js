
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import Menu from '../public/menu.svg'
import { SidebarData } from "./SidebarData";


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [subNav,setsubNav] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showSubnav = () => setsubNav(!subNav);

    function refresh(){
        setSidebar(false)
    }

    return ( 
    <>
    <IconContext.Provider value={{color: 'red'}}>
    <div className="KamilaSidebar">
        <button className="btn btn-danger" onClick={showSidebar}><Menu/></button>
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li onClick={refresh}> X </li>
                {SidebarData.map((item,index)=>{
                    return (
                        <li key={index} className={item.cName}>
                            {item.icon}
                            <Link href={item.path} className="nav-item" passHref onChange={refresh}>
                                <h3>{item.title}</h3>
                            </Link>
                            <ul>
                                {item.subNav }
                            </ul>
                        </li>
                    )
                })}

            </ul>
        </nav>
    </div>
    </IconContext.Provider>
    </>
    );
}
export default Sidebar;



