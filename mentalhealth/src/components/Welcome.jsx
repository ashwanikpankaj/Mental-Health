
import Vector from "./welcome/Vector.png"

import "./welcome/welcome.css"

import {useState} from "react";
function Welcome (){

    const [count,setCount] = useState(1);


    console.log(count)

    return  count == 1?(
        <div className="cont">  
        <div>
        <img src={Vector}/> 
        </div>
        <h1 className="welcome">Welcome</h1>
        <div className="bottom-box">
         <div className="text">“Bring in the spirituality and positivity in you with Blue aura.“</div>
         <div className="button-cont">
           <div>
         <button className="skip">Skip</button>
         </div>
         <div className="dot-icon">
          <div></div><div></div><div></div>
          </div>
          <div>
          <button className="next" onClick={()=>setCount(count+1)}>Next</button>
          </div>
         </div>  
        </div>
        <div className="bottom-line"><div></div></div>
        </div>
       
    ): count==2? ( <div className="cont">  
    <div>
    <img src={Vector}/> 
    </div>
    <h1 className="welcome">Welcom</h1>
    <div className="bottom-box">
     <div className="text">“Bring in the spirituality and positivity in you with Blue aura.“</div>
     <div className="button-cont">
       <div>
     <button className="skip">Skip</button>
     </div>
     <div className="dot-icon">
      <div></div><div></div><div></div>
      </div>
      <div>
      <button className="next" onClick={()=>setCount(count+1)} >Next</button>
      </div>
     </div>  
    </div>
    <div className="bottom-line"><div></div></div>
    </div>
    ):(
        <div className="cont">  
        <div>
        <img src={Vector}/> 
        </div>
        <h1 className="welcome">Welcom3</h1>
        <div className="bottom-box">
         <div className="text">“Bring in the spirituality and positivity in you with Blue aura.“</div>
         <div className="button-cont">
           <div>
         <button className="skip">Skip</button>
         </div>
         <div className="dot-icon">
          <div></div><div></div><div></div>
          </div>
          <div>
          <button className="next" onClick={()=>setCount(count+1)} disabled={count===3?true:false}>Next</button>
          </div>
         </div>  
        </div>
        <div className="bottom-line"><div></div></div>
        </div> 
    )
}

export {Welcome}