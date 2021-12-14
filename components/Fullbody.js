import Slider from './Slider'
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
    setwidth(width),
    setHeight(height)

},[])


    return ( 
        <body className="container py-4">
            {/* <Slider/> */}
            <h3 className="AfterInt">O Nas</h3>
            <div className="row align-items-md-stretch KamCon">
                <div className="col-md-6"><WhyWe/></div>
                <div className="col-md-6"><Employer/></div>
            </div>
            <Experience/>
            <Solutions/>
        
            <div className='UniaBaner'> 
                <Image src="/Unia.png" width={600} height={186} className="UniaImage" alt="Unia"/>
            </div>
        </body>
    );
}
export default Fullbody;