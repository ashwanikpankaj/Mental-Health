import { useState } from "react"
import "../styles/createpost.css"
import { Bottom } from "./Bottom"
import { Heading } from "./Heading"
import { StaticHeader } from "./Staticheader"


function Createpost (){

    const [text,setText] = useState("")

  const handleChange = (e)=>{
     const {value} = e.target

     setText(value)
  }
  console.log("text",text)

    return (
        <div id="create-post-cont">
            <StaticHeader/>
            <Heading heading = {"Create Post"} image={"leftarrow.png"}/>
            <div id="write-issue-text">WRITE YOUR ISSUE HERE </div>
            <select id="create-post-select">
               <option>Choose category</option>
                 <option value="all">ALL</option>
                 <option value="anxiety&Depression">Anxiety & Depression</option>
                 <option value="mindfulness">Mindfulness</option>
                 <option value="focus&concentration">Focus & concentration</option>
                 <option value="sleepissues">Sleep issues</option>
                 <option value="stress">Stress</option>
             </select>
            <textarea id="create-post-text-area" value={text} onChange={handleChange}> </textarea>
            <button id="create-post-btn">POST</button>
            <Bottom/>
          
        </div>
    )
}

export {Createpost}