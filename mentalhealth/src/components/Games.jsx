import { StaticHeader } from './Staticheader'
import "../styles/games1.css"
import { useState } from 'react'

export const Games = ({text}) => {
    const [gamesData, setGamesData] = useState({
     circles: ["How many circles contains the black dot?", "circlegame.jpg", "6", "8",],
     triangles: ["How many triangles do you see?", "trianglegame.jpg", "10", "16"]
    });

    const [temp, setTemp] = useState(0);



    return (
        <>
            <div id="Games">
                <StaticHeader></StaticHeader>
             <p id="circlesText">How many circles contains the black dot?</p>
                <img id="circlegame" src="circlegame.jpg"></img>
                <button id="answer6"><div id="Text6">6</div></button>
                <button id="answer8"><div id="Text8">8</div></button>

            </div>
        </>
    )
}