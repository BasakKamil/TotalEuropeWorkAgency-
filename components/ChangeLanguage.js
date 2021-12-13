import { useState } from "react";

const ChangeLanguage = () => {
    const [lang, setlang] = useState('Polish');

    function change(event){
        setlang(event.target.value)
        console.log(lang)
    }

    return ( 
        
    <div className="LgArea d-flex">
        <select className="form-select LgSelect" aria-label="Selecy Language" defaultValue={'DEFAULT'}id="lang" onChange={change} value={lang}>
            <option value="DEFAULT" disabled>Wybierz Jezyk</option>
            <option value="Polish">Polish</option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
        </select>
    </div>
   
    );
}
export default ChangeLanguage;