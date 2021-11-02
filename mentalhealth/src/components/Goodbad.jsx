import '../styles/goodbad.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'

export const Goodbad = () => {

    return (
        <>
            <div id="goodbad">
                <StaticHeader />
                <p id="feeling">How are you feeling?</p>
                <img id="good" src='good.jpg'></img>
                <img id="bad" src='bad.jpg'></img>
                    <p id="goodtext">GOOD</p>
                    <p id="badtext">BAD</p>
                <Skip/>
            </div>
        </>
    )

}