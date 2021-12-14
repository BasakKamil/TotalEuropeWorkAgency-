import Footer from './Footer'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Menu from './Menu'

const Layout = ({children}) => {

    const [load,setload] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setload(true);    
        } 
    }, [])
    if(load)
    return ( 
        
        <div className="page-container">
            <div className="content-wrap">
            <div className="MenuCentral">
                <Menu/>
            </div>
            <div className="Bodys">
                {children}
            </div>
            </div>
            <Footer/>
        </div>
    );
    else return <Loader />
} 
export default Layout;