import '../styles/login.css'
import axios from 'axios';
import { StaticHeader } from './Staticheader'

export const Login = () => {

    const googleAuth = () => {
        console.log("clicked")
        window.location.href='http://localhost:7765/auth/google'
    }

    return (
        <>
            <div id="login">
                <StaticHeader />
                <div><img id="logo" src="blueaura.png"></img></div>
                <form id="form">
                    <input className="fields" type="text" placeholder="Name" />
                    <input className="fields" type="text" placeholder="Email" />
                    <input className="fields" type="password" placeholder="Password (8+ CHARACTERS)" />
                    <input type="submit" value="Create an account" />
                </form>
                <div>
                    <p id="member">Already a member?</p>
                    <p id="Login">Login</p>
                </div>

                <button id="facebook"><img src="facebook.jpg"></img>Sign up with facebook</button>
                <button id="google" onClick={googleAuth}><img src="google.jpg"></img>Sign up with Google</button>
            </div>
        </>
    )

}