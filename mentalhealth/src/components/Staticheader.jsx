import "../styles/staticHeader.css"

 export const StaticHeader = () => {
    return <>
        <div className="headerBox">
            <p id="time">09:00</p>
            <img id="wifi" src="wifi.jpg"></img>
            <img id="tower" src="tower.jpg"></img>
            <img id="battery" src="battery.jpg"></img>
        </div>
        </>
}