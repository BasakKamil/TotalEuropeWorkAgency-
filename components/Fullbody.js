import Slider from './Slider2'
import Image from 'next/image'
import { useEffect, useState } from "react"
import Employer from './Employer'
import WhyWe from './Whywe'
import Experience from './Experience'
import Solutions from './Solutions'

const Fullbody = () => {
    const [width,setwidth] = useState();
    const [height, setHeight] = useState();
    console.log(width);
    console.log(height);



useEffect(()=>{
    const width= window.innerWidth/2;
    const height = window.innerHeight/3;
    setwidth(width);
    setHeight(height);
},[])


    return ( 
        <body className="container">
            <Slider/>
            <h3 className="AfterInt">O Nas</h3>
            <div className="row align-items-md-stretch">
                <div className="col"><p><WhyWe/></p></div>
                <div className="col"><p><Employer/></p></div>
            </div>
            <Experience/>
            <Solutions/>
        
            <div>
            <Image src="/Unia.png" width={512} height={128} className="UniaImage" alt="Unia"/>
            </div>
        </body>
    );
}
export default Fullbody;