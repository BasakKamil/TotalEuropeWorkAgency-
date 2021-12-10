const ChangeLanguage = () => {
    return ( 
    <div className="LgArea">
        <select className="form-select LgSelect" aria-label="Selecy Language" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Wybierz Jezyk</option>
            <option value="1">Polish</option>
            <option value="2">English</option>
            <option value="3">Dutch</option>
        </select>
    </div>
    );
}
export default ChangeLanguage;