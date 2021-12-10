import Link from 'next/link'
import { useState } from "react";
import Sidebar from './Sidebar';

const mystyle = {
    color: "white",
    backgroundColor: "Lightgrey",
    padding: "10px",
    fontFamily: "Arial"
};


const Navigation = () => {

    const [w, setw] = useState();




    return ( 
    
        <div style={mystyle} className="menu">      
            <nav className="KamilaNav navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="navbar-brand btn-group">
                    <Link href="/" passHref>
                        O nas
                    </Link>
                </li>
                <li className="navbar-brand btn-group">
                    <Link href="/aboutworker" passHref>
                        Dla pracownika
                    </Link>
                </li>
                <li className="navbar-brand btn-group">
                    <Link href="/foremployer" passHref>
                        Dla pracodawcy
                    </Link>
                </li>
                <li className="navbar-brand btn-group">
                    <Link href="/contact" passHref>
                        Kontakt
                    </Link>
                </li>
                </ul>
                </div>
            </nav>
            <Sidebar/>
        </div>
        
        );

    
    
            
                
            
}
export default Navigation;