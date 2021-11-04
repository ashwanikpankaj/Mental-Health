import { SiderbarData } from './SidebarData'
import {Link} from 'react-router-dom'
import '../styles/landing.css'

export const Sidebar= ({prop})=>{

    return(
        <>
            <nav className={prop ? 'nav-menu active' : 'nav-menu'}>

                <img id="girlprofile" src="girlprofile.jpg" />
                <p id="profilename">Sakshi Agarwal</p>
                <ul className='nav-menu-items'>
                    {SiderbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <img src={item.icon} alt={item.icon}></img>
                                    <span id="spantag">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}