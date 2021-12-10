const Form = () => {
    return ( 
        <div className="FormPage">
            <form className="contact-form" >
                <label>
                    <p>Imię:</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>Nazwisko:</p>
                    <input type="text" name="surname" />
                </label>
                <label>
                    <p>Wiadomosc:</p>
                    <textarea type="text" name="message" />
                </label>
                <input type="submit" className="btn btn-success" value="Wyślij" />
            </form>
        </div>
    );
}
export default Form;