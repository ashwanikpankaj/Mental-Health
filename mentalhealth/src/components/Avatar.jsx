import { Link } from 'react-router-dom'
import '../styles/avatar.css'
import { StaticHeader } from './Staticheader'

export const Avatar = () => {

    return (
        <>
            <div id="avatar">
                <StaticHeader />
                <p id="choose">Choose your avatar</p>
                <Link to="/allset">
                    <img id="boy" src="boy.jpg" alt="boy"></img>
                </Link>

                <Link to="/allset">
                    <img id="girl" src="girl.jpg" alt="girl"></img>
                </Link>


                <p id="male">Male</p>
                <p id="female">Female</p>
            </div>
        </>
    )

}