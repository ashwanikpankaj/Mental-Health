import '../styles/landing.css'

export function BottomNavBar({props}) {

    const hamburgerclick = () =>{
        props()
    }
    
    return (
        <>
            <div onClick={hamburgerclick} className="lpage_bottom_nav_bar">
                <img id="home" src="./landing_images/home.png" alt="" />
                <div id="home1">Home</div>

                <img id="game" src="./landing_images/game.png" alt="" />
                <div id="game1">Game</div>

                <img id="meditate" src="./landing_images/meditate.png" alt="" />
                <div id="meditate1">Meditate</div>

                <img id="stats" src="./landing_images/stats.png" alt="" />
                <div id="stats1">My Stats</div>
            </div>
        </>
    )
}