import Image from 'next/image'
import Link from 'next/link'
import Anime from 'react-animejs-wrapper'



const LogoEff = () => {

    

    return ( 
    <>
    <Anime
    style={{
    }}
    config={{
        translateX: [0, 20],
        scale: [0,1],
        loop: false,
        delay: 800,
        easing: 'spring(1, 80, 13, 0)',
    }}
    className='AnimeClass'
    >
                <div className="LogoKamilBasak navbar-brand">
                    <Link href="/" passHref>
                        <Image src="/Logo1Svg.svg" width={300} height={100} alt="LogoBasakKamil"/>
                    </Link>
                </div>
    </Anime>
    <Anime
    style={{
    }}
    config={{
        translateX: [0, 20],
        scale: [0,1],
        loop: false,
        delay: 800,
        easing: 'spring(1, 80, 13, 0)',
    }}
    className='AnimeClassMobile'
    >
                <div className="LogoKamilBasak navbar-brand">
                    <Link href="/" passHref>
                        <Image src="/Logo1Svg.svg" width={300} height={100} alt="LogoBasakKamil"/>
                    </Link>
                </div>
    </Anime>
    </>
    );
}
export default LogoEff;