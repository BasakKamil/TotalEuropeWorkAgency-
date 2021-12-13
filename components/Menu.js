import Logo from './Logo'
import Navigation from './Navigation'
import ChangeLanguage from './ChangeLanguage'
import Sidebar from './Sidebar'

const Menu = () => {
    return ( 
        <nav className='navbar navbar-expand-md navbar-dark fixed-top'>
            <div className='container-fluid'>
                <Logo/>
                    <Navigation/>
                    <Sidebar/>
                    <ChangeLanguage/>
                
            </div>
        </nav>
    );
}
export default Menu;