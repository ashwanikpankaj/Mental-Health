import "../styles/community.css"
import { StaticHeader } from "./Staticheader"
import { Bottom } from "./Bottom"
import { Heading } from "./Heading"
export const Community = () => {
    return <div id="community-Box">
        <StaticHeader />
        <Heading image={"leftarrow.png"} heading={"COMMUNITY"} />
        <div id="community-create-Box">
            <h3 id="community-Post">Create a post</h3>
            <img id="community-right-arrow" src="rightarrow.jpg" alt="right arrow " />
        </div>
        <Bottom></Bottom>
    </div>
}