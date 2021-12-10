
const Menudrop = () => {
    return ( 
<div className="ToggleMenuMobile">
    <ul className="ToggleM">
        <li className="btn-group">
            <div className="dropdown-toggle drop-down-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" >
                <span>O Nas</span>
            </div>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="*"> 1</a></li>
            
            </ul>
        </li>
        <li className="btn-group">
            <div className="dropdown-toggle drop-down-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" >
                <span>Dla Pracodawcy</span>
            </div>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="*"> Uno</a></li>
            
            </ul>
        </li>
        <li className="btn-group">
            <div className="dropdown-toggle drop-down-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" >
                <span>Dla Pracownikow</span>
            </div>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="*"> Uno</a></li>
            
            </ul>
        </li>
        <li className="NewContact">
            Kontakt
        </li>
    </ul>
</div>
    );
}
export default Menudrop;