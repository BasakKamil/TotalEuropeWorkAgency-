
import Link from "next/link";
import { useState } from "react";
import Menu from '../public/menu.svg'
import { SidebarData } from "./SidebarData";


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    function refresh(){
        setSidebar(false)
    }

    return ( 
    <div className="KamilaSidebar">
        <button className="btn btn-danger" onClick={showSidebar}><Menu/></button>
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            
            <ul className="nav-menu-items">
                <li onClick={refresh}> X </li>
                {SidebarData.map((item,index)=>{
                    console.log(item)
                    return (
                        <li key={index} className={item.cName}>
                            {item.icon}
                            <Link href={item.path} className="nav-item" passHref onChange={refresh}>
                                <h3>{item.title}</h3>
                            </Link>
                            {/* <a href={item.path} className="nav-item">
                                {item.icon}
                                <h3>{item.title}</h3>
                            </a> */}
                        </li>
                    )
                })}

            </ul>
        </nav>
    </div>
    );
}
export default Sidebar;



