import Image from 'next/image'

const Experience = () => {
    return ( 
        <div className="experienceBody">
            <h3>POSIADAMY DOŚWIADCZENIE W BRANŻACH:</h3>
            
            <ul className="d-flex justify-content-center">
                <li>
                    <div>
                        <h4>Spożywczej</h4>
                        <p><Image src="/eat.png" alt="product" width={128} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Produkcyjnej</h4>
                        <p><Image src="/produce.png" alt="produce" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Logistycznej</h4>
                        <p><Image src="/logistic.png" alt="logistic" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Budowlanej</h4>
                        <p><Image src="/building.png" alt="building" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Przemyslowej</h4>
                        <p><Image src="/industrial.png" alt="industrial" width={100} height={64} /></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Automotive</h4>
                        <p><Image src="/automotive.png" alt="automotive" width={100} height={64} /></p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default Experience;