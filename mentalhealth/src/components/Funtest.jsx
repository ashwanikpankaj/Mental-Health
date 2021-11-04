import '../styles/funtest.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'

export const Funtest = () => {

    return (
        <>
            <div id="funtest">
                <StaticHeader />
                <p id="funtestp">Take a fun test to help us know you.</p>
                <img id="funtestimg" src="funtest.jpg"></img>
                <button id="start">Start</button>
                <Skip prop="Skip"/>
            </div>
        </>
    )

}