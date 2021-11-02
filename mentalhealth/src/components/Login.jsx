import '../styles/login.css'

export const Login = () => {

    return (
        <>
            <div id="login">
                <div><img id="logo" src="blueaura.png"></img></div>
                <form id="form">
                    <input className="fields" type="text" placeholder="Name"/>
                    <input className="fields" type="text" placeholder="Email"/>
                    <input className="fields" type="password" placeholder="Password (8+ CHARACTERS)"/>
                    <input type="submit" value="Create an account"/>
                </form>
                <div>
                    <p id="member">Already a member?</p>
                    <p id="Login">Login</p>
                </div>

                <button id="facebook"><img src="facebook.jpg"></img>Sign up with facebook</button>
                <button id="google"><img src="google.jpg"></img>Sign up with Google</button>
            </div>
        </>
    )

}