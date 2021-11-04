import '../styles/landing.css'
import '../styles/meditate.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function Meditate() {

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)

    return (
        <>
            <div className="lpage_maindiv">
                <div >
                    <Navbar props={hideSidebar}/>
                </div>

                <div>
                    <AppStatusBar props={showSidebar}/>
                </div>

                <div>
                    <img onClick={hideSidebar} id="m_girl" src="./landing_images/mindfulness.png" alt="" />
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
                <Sidebar prop={sidebar}/>
            </div>
        </>
    )
}