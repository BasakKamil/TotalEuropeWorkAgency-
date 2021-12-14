import Gif from '../public/gif.svg'
import Logo from './Logo';
import Ring from './effects/rings'
const Loader = () => {
    return (
        <div className="KamilaBegin">
            <Logo/>
            <p><Gif/></p> 
            <p className='LoadH'> Total Europe Work Agency sp. Z o.o </p>
            <p className='effectBox'>
                <Ring/>
            </p>
        </div>
    );
}
export default Loader;