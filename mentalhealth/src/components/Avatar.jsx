import '../styles/avatar.css'
import { StaticHeader } from './Staticheader'

export const Avatar = () => {

    return (
        <>
            <div id="avatar">
                <StaticHeader />
                <p id="choose">Choose your avatar</p>
                <img id="boy" src="boy.jpg"></img>
                <img id="girl" src="girl.jpg"></img>
                <p id="male">Male</p>
                <p id="female">Female</p>
            </div>
        </>
    )

}