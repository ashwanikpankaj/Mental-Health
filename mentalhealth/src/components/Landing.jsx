import { useEffect, useState } from 'react'
import '../styles/landing.css'
import axios from 'axios';
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'
// import { StaticHeader } from './Staticheader'
// import { SiderbarData } from './SidebarData'
// import {Link} from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function Landing() {

    const [name,setName] = useState("")

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)

    useEffect(()=>{
        fetchUser()
    },[])


    //http://localhost:7765/getuser
    const fetchUser = () => {
        axios
        .get("http://localhost:7765/profile", {withCredentials: true})
        .then(res => {
            console.log("here2")
            console.log("data",res.data.user)
            localStorage.setItem('data', JSON.stringify(res.data));
            setName(res.data.user.name)
        })
        .catch(err => {
            console.log("Not properly authenticated!");
            console.log("Error", err);
        })

        //newWindow.close();
    }
    
    return (
        <>
            <div className="lpage_maindiv">
                <div>
                    <Navbar props={hideSidebar}/>
                </div>

                <div>
                    <AppStatusBar props={showSidebar}/>
                </div>

                <div id="girldiv" onClick={hideSidebar}>
                    <img id="lpage_girl" src="./landing_images/girl.png" alt="" />
                </div>

                <div>
                    <Rectangle props={hideSidebar}/>
                </div>

                <div>
                    <BottomNavBar props={hideSidebar}/> 
                </div>

                <div>
                    <Bottom />
                </div>
                <Sidebar prop={sidebar} username={name}/>
            </div>
        </>
    )
}