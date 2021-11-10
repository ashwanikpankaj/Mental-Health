
import "../styles/prakash.css"
import { StaticHeader } from "./Staticheader";
export const Prakash = () => {
  return (
    <>
          <div id="docDetailBox">
         <StaticHeader></StaticHeader>
        <div id="docDetailHeading">
          <img id="docDetailArrow" src="leftArrowdoc1.jpg" />
          <h1 id="docDetailTherapist">THERAPIST</h1>
        </div>

        <img src="doctorpic.jpg" id="docDetailImg" />
        <h2 id="docName">Arti Vyas</h2>
        <h5 id="docQualification">Psychologist, BA Psychology</h5>

        <h2 id="docSpecialisation">Specialisation</h2>
        <h5 id="docCategory">Depression, anxiety, stress</h5>

        <h2 id="docIntroduction">Introduction</h2>
        <p id="docIntroParagraph">
          Arti Vyas Psychologist, BA Psychology Specialisation Depression,
          anxiety, stress Introduction I am a psycologist who has specialisation
          in clinical population. I have experinece working with children,
          adolesence and adults. I love to guide people in stressful times as I
          believe it’s my duty and responsibility towards mankind. I love to
          read self help books and I am an aspiring motivational coach
              </p>

              <button id="docBook">Book</button>
      </div>
    </>
  );
};
