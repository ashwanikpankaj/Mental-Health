import '../styles/landing.css'
import '../styles/diary1.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'


export function Diary1() {
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
                    <img id="d1_girl" src="./landing_images/diary11.jpg" alt="" />
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