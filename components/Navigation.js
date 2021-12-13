import Link from 'next/link'
import { useState } from "react"
import { AboutWorker, ForEmployer } from './SidebarData'

const mystyle = {
    color: "white",
    backgroundColor: "Lightgrey",
    padding: "10px",
    fontFamily: "Arial"
};


const Navigation = () => {

    const [drop1, setdrop1] = useState('Drop1Off');
    const [drop2, setdrop2] = useState('Drop2Off');
    const handlechange = () => setdrop1(!drop1);
    const handlechange2 = () => setdrop2(!drop2);
    return ( 
    
        <div className="menu">      
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="navbar-brand btn-group nav-item">
                            <Link href="/" passHref>
                                O Nas
                            </Link>
                        </li>
                        <li className="navbar-brand btn-group nav-item KamilaCentral" onMouseOver={handlechange} onMouseOut={handlechange}>
                                <p className='KamilaDrop'>Dla pracownika</p>
                                <ul className={drop1? 'Drop1Off' : 'Drop1On' }>
                                    {AboutWorker.map((item,index) => {
                                        return(
                                            <li key={index}>
                                                    <Link href={item.path} className="nav-item" passHref>
                                                        <a className={item.cName}>{item.title}</a>
                                                    </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </li>
                        <li className="navbar-brand btn-group nav-item" onMouseOver={handlechange2} onMouseOut={handlechange2}>
                                <p className='KamilaDrop'>Dla pracodawcy</p>
                                <ul className={drop2? 'Drop2Off' : 'Drop2On' }>
                                    {ForEmployer.map((item,index)=>{
                                        return (
                                            <li key={index}>
                                                <Link href={item.path}>
                                                    <a className={item.cName}>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </li>
                        <li className="navbar-brand btn-group nav-item">
                            <Link href="/contact" passHref>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
            </div>
        
        );

    
    
            
                
            
}
export default Navigation;