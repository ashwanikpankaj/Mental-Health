import '../styles/landing.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'
// import { StaticHeader } from './Staticheader'


export function Landing() {
    return (
        <>
            <div className="lpage_maindiv">
                <div>
                    <Navbar/>
                </div>

                <div>
                    <AppStatusBar />
                </div>

                <div>
                    <img id="lpage_girl" src="./landing_images/girl.png" alt="" />
                </div>

                <div>
                    <Rectangle />
                </div>

                <div>
                    <BottomNavBar /> 
                </div>

                <div>
                    <Bottom />
                </div>
            </div>
        </>
    )
}