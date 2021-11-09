import '../styles/login.css'
import axios from 'axios';
import { StaticHeader } from './Staticheader'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const Button = styled.input`
    position: absolute;
    width: 362px;
    height: 54px;
    left:24px;
    top:498px;
    padding: 12px 85px;
    background: #A28EFC;
    color: #FFFFFF;
    border-radius: 30px;
    font-family: 'Poppins';
    font-style: normal; 
    font-weight: bold;
    font-size: 17px;
    line-height: 30px;
    text-align: center;
    border:none;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:active {
        background: #534883;
    }
`;


export const Login = () => {
    const history = useHistory();
    const [signuperror,setSignUpError] = useState(false)

    const [userData,setUserData] = useState({
        email:"",
        password:""
    })

    const handlechange = (e) =>{

        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value,
        })
    }

    const emptyData = () =>{
        setUserData({
            email:"",
            password:""
        })

    }

    const normalSignUp = (e) => {

        e.preventDefault()

        if(!userData.email || !userData.password){
            return
        }

        axios.post("http://localhost:7765/login", userData)
            .then(res => {
                setSignUpError(false)
                emptyData()
                console.log(res);
                console.log(res.data);
                history.push("/blueaura");
            }).catch(function(e) {
                setSignUpError(true)
                emptyData()
                console.error("e",e.response);
            })
    }

    const googleAuth = () => {
        console.log("clicked")
        window.location.href = 'http://localhost:7765/auth/google'

        // axios.get("http://localhost:7765/auth/google")
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        //   window.location.pathname='http://localhost:3000'
        // })
    }

    return (
        <>
            <div id="login">

                <StaticHeader />

                {signuperror?<p id="invalid">Invalid email or password</p>:""}

                <div><img id="logo" src="blueaura.png" alt="leftarrow"></img></div>

                <form onSubmit={normalSignUp} id="form">
                    <input value={userData.email} name="email" onChange={handlechange} className="fields" type="email" placeholder="E-mail" />
                    <input value={userData.password} name="password" onChange={handlechange} id="passwordfield" style={{ backgroundImage: "url('eyebrow.svg')" }} className="fields" type="password" placeholder="Password (8+ CHARACTERS)" />
                    <Button type="submit" value="Login to account" />
                </form>

                <div>
                    <p id="newapp">New to app?</p>
                    <p id="Signuproute">Sign up</p>
                </div>

                <button id="facebook"><img src="facebook.jpg" alt="facebook"></img>Sign up with facebook</button>
                <button id="google" onClick={googleAuth}><img src="google.jpg" alt="google"></img>Sign up with Google</button>
            
            </div>
        </>
    )

}