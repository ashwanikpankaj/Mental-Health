import { useState } from 'react'
import '../styles/landing.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'
// import { StaticHeader } from './Staticheader'
import { SiderbarData } from './SidebarData'
import {Link} from 'react-router-dom'

export function Landing() {

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)
    
    return (
        <>
            <div className="lpage_maindiv">
                <div>
                    <Navbar props={hideSidebar}/>
                </div>

                <div>
                    <AppStatusBar props={showSidebar}/>
                </div>

                <div id="girldiv" onClick={hideSidebar}>
                    <img id="lpage_girl" src="./landing_images/girl.png" alt="" />
                </div>

                <div>
                    <Rectangle props={hideSidebar}/>
                </div>

                <div>
                    <BottomNavBar props={hideSidebar}/> 
                </div>

                <div>
                    <Bottom />
                </div>

                <nav className={sidebar? 'nav-menu active':'nav-menu'}>

                    <img id="girlprofile" src="girlprofile.jpg"/>
                    <p id="profilename">Sakshi Agarwal</p>
                    <ul className='nav-menu-items'>
                        {SiderbarData.map((item,index)=>{
                          return(
                              <li key={index} className={item.cName}>
                                  <Link to= {item.path}>
                                      <img src={item.icon} alt={item.icon}></img>
                                      <span id="spantag">{item.title}</span>
                                  </Link>
                              </li>
                          )  
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}