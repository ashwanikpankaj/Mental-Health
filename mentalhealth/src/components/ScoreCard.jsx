import "../styles/ScoreCard.css"
import { StaticHeader } from './Staticheader'
export const ScoreCard = () => {

    return (
        <>
            <div id="cardOuterBox">
                 <StaticHeader></StaticHeader>
                <h3  id="cardHeading"> Amazing Sakshi!</h3>
                <img src="winner.jpg" id="cardwinner" alt="cardwinner"/>
                <h3 id="cardEarn">You have earned</h3>
                <h2 id="cardPoint"> 350 pts</h2>
            </div>
        </>
    )


    //  return (
    //     <>
    //         <div id="cardOuterBoxLosing">
    //              <StaticHeader></StaticHeader>
    //             <h3  id="cardHeadingLosing"> Good work Sakshi!</h3>
    //             <img src="looser.png" id="cardLosing"/>
    //             <h3 id="MoreFocus">But you need to focus more.</h3>
    //              <h2 id="TryAgain">TRY AGAIN</h2>
    //              <h3 id="ToUnlock">To unlock level 2</h3>
    //         </div>
    //     </>
    // )
}