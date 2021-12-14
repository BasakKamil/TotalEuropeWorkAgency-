import Image from 'next/image'
import Link from 'next/link'



const Logo = () => {

    

    return ( 
                <div className="LogoKamilBasak navbar-brand">
                    <Link href="/" passHref>
                        <Image src="/Logo1Svg.svg" width={300} height={100} alt="LogoBasakKamil"/>
                    </Link>
                </div>
    )
}
export default Logo;