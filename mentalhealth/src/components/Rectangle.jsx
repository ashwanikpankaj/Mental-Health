import '../styles/landing.css'

export function Rectangle({props}) {

    const hamburgerclick = () =>{
        props()
    }
    

    return (
        <>
            <div onClick={hamburgerclick} className="lpage_rectangle">
                <div className="lpage_rectangle1">
                    <div id="task1">Todays Task :</div>
                </div>

                <div className="lpage_rectangle2">
                    <div id="meditation">Tap to start 15 min meditation</div>
                    <img id="heart2" src="./landing_images/heart.png" alt="" />
                </div>

                <div className="lpage_rectangle3">
                    <div id="playing">Let's Increase your focus-Tap to play</div>
                    <img id="heart2" src="./landing_images/heart.png" alt="" />
                </div>

                <div className="lpage_rectangle4">
                    <div id="diary">Dear diary-Positive writing</div>
                    <img id="heart2" src="./landing_images/heart.png" alt="" />
                </div>
            </div>
        </>
    )
}