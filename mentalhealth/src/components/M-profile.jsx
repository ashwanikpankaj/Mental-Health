import '../styles/landing.css'
import '../styles/m-profile.css'
import { StaticHeader } from './Staticheader'
import { Bottom } from './Bottom'

export function Mprofile() {
    return (
        <>
            <div className="lpage_maindiv">
                <StaticHeader />

                <div id="m-profile1">
                    <img id="m-pro1" src="./landing_images/m-pro-arrow.png" alt="" />
                    <div id="m-pro2">MY PROFILE</div>
                </div>

                <div id="m-profile2">
                    <div id="m-pro3">NAME - Sakshi Agrawal</div>
                    <div id="m-pro4">PHONE No. - 9876543210</div>
                    <div id="m-pro5">EMAIL - sakshiagr12@gmail.com</div>
                    <div id="m-pro6">
                        <div id="m-pro7">Edit</div>
                        <img id="m-pro8" src="./landing_images/m-pro-edit.png" alt="" />
                    </div>
                </div>

                <div id="m-profile3">
                    <div id="m-pro9">Theropist appointments</div>
                </div>

                <div id="m-profile4">Upcoming</div>

                <div id="m-profile5">
                    <div id="m-pro10">Dr. Shreya Singh, Psychologist</div>
                    <div id="m-pro11">20 NOV,</div>
                    <div id="m-pro12">9:00 am</div>
                    <div id="m-pro13">
                        <div id="m-pro14">Join the session</div>
                    </div>
                </div>

                <Bottom />
            </div>
        </>
    )
}