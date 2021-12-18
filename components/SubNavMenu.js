import Link from "next/link";

const SubNavMenu = ({item,index}) => {
    return ( 
        <li className='SubNavMenuItem'>
        <Link href={item.path} key={index}>
            <a>
                {item.title}
            </a>
        </Link>
        </li>
    );
}
export default SubNavMenu;