export const getStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { kamila: data}
    }
}

const Offerts = ({kamila}) => {
    return ( 
        <div className="OffertsAll">
            <h2>Oferty Pracy</h2>
            {kamila.map(kamila => {
                console.log(kamila)
                return (
                <div key={kamila.id} className="OfertKam">
                    <a>
                        <h3>{kamila.name}</h3>
                    </a>
                    <p>
                        E-Mail: {kamila.email}
                    </p>
                </div>
                )
                })}
        </div>
    );
}
export default Offerts;