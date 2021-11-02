import '../styles/landing.css'
import '../styles/diary.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'

export function Diary() {
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
                    <img id="d_girl" src="./landing_images/diary.png" alt="" />
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