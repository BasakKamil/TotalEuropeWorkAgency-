
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import Menu from '../public/menu.svg'
import { SidebarData } from "./SidebarData";
import { AiOutlineClose } from 'react-icons/ai'
import SubMenu from "./SubMenu";


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function refresh(){
        setSidebar(false)
    }

    return ( 
    <>
    <IconContext.Provider value={{color: 'lightgrey'}}>
    <div className="KamilaSidebar">
        <button className="btn btn-danger" onClick={showSidebar}><Menu/></button>
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <AiOutlineClose onClick={refresh} className="IconCLose"/> 
                {SidebarData.map((item,index)=>{
                    return (
                        <SubMenu item={item} key={index} />
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



