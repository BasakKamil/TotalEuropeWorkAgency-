import Image from 'next/image'

const Solutions = () => {
    return ( 
        <div>
            <h3>OFERUJEMY ROZWIĄZANIA W ZAKRESIE:</h3>
            <ul className="d-flex justify-content-center">  
                <li>
                    <div>
                        <h4>Outsorcing Produkcyjny</h4>
                        <p><Image src="/industrial.png" alt="industrial" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Pracownicy Niewykfalifikowani</h4>
                        <p><Image src="/industrial.png" alt="industrial" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Pracownicy Wykfalikowani</h4>
                        <p><Image src="/industrial.png" alt="industrial" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Zakwaterowanie</h4>
                        <p><Image src="/industrial.png" alt="industrial" width={100} height={64} /></p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default Solutions;