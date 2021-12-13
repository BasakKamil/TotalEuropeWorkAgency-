import Image from 'next/image'

const Logo = () => {
    return ( 
        <div className="LogoKamilBasak navbar-brand">
            <Image src="/Logo1Svg.svg" width={300} height={100} alt="LogoBasakKamil"/>
        </div>
    );
}
export default Logo;