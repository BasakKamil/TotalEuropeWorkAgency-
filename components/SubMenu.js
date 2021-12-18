import Link from "next/link";
import { useState } from "react";
import SubNavMenu from './SubNavMenu.js';


const SubMenu = ({item,key}) => {

    
    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return ( 
        <div className='NavItemMap'>
        <div>
            <a className="nav-item">
                <div onMouseOver={item.subNav && showSubnav }>
                    <h3>{item.title}</h3>
                </div>
                <div className='iconClass'>              
                                        {item.subNav && subnav 
                                            ? item.iconOpened 
                                            : item.subNav 
                                            ? item.iconClosed
                                            : null }
    
                </div>
            </a>    
        </div>
        <p>
                        {item.icon}
            </p>
            {subnav && item.subNav.map((item, index)=>{
                return (
                    <SubNavMenu item={item} key={index}/>
                )
            })}
        </div>
    );
} 
export default SubMenu;