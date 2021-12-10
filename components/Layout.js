import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import ChangeLanguage from './ChangeLanguage'
import { useEffect, useState } from 'react'
import Loader from './Loader'

const Layout = ({children}) => {

    const [load,setload] = useState(false);

    useEffect(() => {
        window.onload = (event) => {
            console.log('page is fully loaded');
            setTimeout(function(){ setload(true) }, 2000);     
        }; 
    }, [])
    if(load)
    return ( 
        
        <div className="page-container">
            <div className="content-wrap">
            <div className="MenuCentral">
                <Logo/>
                <Navigation/>
                <ChangeLanguage/>
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