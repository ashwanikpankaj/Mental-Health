import '../styles/landing.css'
import '../styles/meditate1.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'


export function Meditate1() {
    return (
        <>
            <div className="lpage_maindiv">
                <div >
                    <Navbar />
                </div>

                <div>
                    <AppStatusBar />
                </div>

                <div>
                    <img id="m1_girl" src="./landing_images/mindfulness1.png" alt="" />
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