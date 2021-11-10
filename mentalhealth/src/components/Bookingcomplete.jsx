import "../styles/Bookingcomplete.css";
import { Bottom } from "./Bottom";
import { StaticHeader } from "./Staticheader";
import { Skip } from './Skip'
import { Link } from 'react-router-dom'
import { Heading } from "./Heading";
export const Bookingcomplete = () => {
  return (
    <>
        <div id="BookingOutterBox">
        <StaticHeader></StaticHeader>
        <Heading image="leftArrowdoc1.jpg" heading="BOOKING COMPLETE"></Heading>
         <div id="Booking-doc-image">
             <img src="bookingdocimage.jpg" alt="doctor image" />     
         </div>
         
              <h4 id="Booking-doc-name">Dr. Arti Vyas</h4>
              <h5 id="Booking-doc-category">Psychologist</h5>
              <h3 id="Booking-doc-specialist">SPECIALIST - Depression,anxiety,stress</h3>
              <h3 id="Booking-doc-qualification">QUALIFICATION - BA Psychology</h3>
              <h3 id="Booking-doc-contact" >SESSION TYPE - CHAT/ PHONE CALL</h3>
              <h3 id="Booking-Session-Date">SESSION DATE - 20. 11. 21 </h3>
              <h3 id="Booking-Time">SESSION TIME - 9 : 00 AM</h3>

              <h2 id="Booking-Total" >TOTAL AMOUNT PAID</h2>
              <h2  id="Booking-Total-value">Rs 399</h2>
              
              <Link to="/homepage">
                    <Skip prop="Back to homepage" />
              </Link>
              
         <Bottom />
      </div>
    </>
  );
};
