import { StaticHeader } from "./Staticheader";
import {Heading} from "./Heading"
import "../styles/therapist-appointment.css"
import { Bottom } from "./Bottom";
function TherapistAppointment (){

    return (
        <div id="therapist-appointment-cont">
        <StaticHeader/>
        <Heading image={"leftarrow.png"} heading={"THERAPIST APPOINTMENT"}/>
        <div id="mobile-no-div">+919707109851</div>
        <div id="therapist-line-div"></div>
        <div id="gmail-div">ashnit8294@gmail.com</div>

        <div>Payment Mode</div>

        <img src="paymentMode/atmcard.png" id="atm-card-mode"/>
        <div>CARD</div>
        <img src="paymentMode/rightdirection.png"/>

        <img src="paymentMode/upicard.png" id="upi-card-mode"/>
        <div>UPI</div>
        <img src="paymentMode/rightdirection.png"/>

        <img src="paymentMode/walletcard.png" id="wallet-card-mode"/>
        <div>WALLET</div>
        <img src="paymentMode/rightdirection.png"/>

        <img src="paymentMode/netbankingcard.png" id="netbanking-card-mode"/>
        <div>NET BANKING</div>
        <img src="paymentMode/rightdirection.png"/>
        <Bottom/>
        </div>
    )
}

export {TherapistAppointment}