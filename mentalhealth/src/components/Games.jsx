import { StaticHeader } from './Staticheader'
import "../styles/games1.css"
import { useState } from 'react'


// #fc8282
export const Games = () => {
    const [redcolor, setRedcolor] = useState("")
    const [greencolor, setGreencolor] = useState("")
    const [temp,setTemp]=useState(1)
    function handleCorrect() {
       
        setGreencolor("#A7F072")
        setTimeout(() => {
            setTemp(2)
             setGreencolor("#a28efc")
        }, 1000);
    }
    function handleWrong() {
        setRedcolor("#fc8282")
        setTimeout(() => {
            setTemp(2)
              setGreencolor("#a28efc")
        }, 1000);
    }
    return temp==1?(
        <>
            <div id="Games">
                <StaticHeader></StaticHeader>
             <p id="circlesText">How many circles contains the black dot?</p>
                <img id="circlegame" src="circlegame.jpg"></img>
                <button style={{  background:greencolor}} onClick={handleCorrect} id="answer6"><div id="Text6">6</div></button>
                <button style={{  background:redcolor}}  id="answer8"><div id="Text8" onClick={handleWrong}>8</div></button>

            </div>
        </>
    ) : (
             <>
            <div id="Games">
                <StaticHeader></StaticHeader>
             <p id="circlesText">How many triangles do you see?</p>
                <img id="circlegame" src="trianglegame.jpg"></img>
                <button style={{  background:redcolor}} onClick={handleWrong} id="answer6"><div id="Text6">10</div></button>
                <button style={{  background:greencolor}}  id="answer8"><div id="Text8" onClick={handleCorrect}>16</div></button>

            </div>
        </>
            
    )
}