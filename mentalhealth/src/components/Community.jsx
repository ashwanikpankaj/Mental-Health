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
            <img id="community-middle-image" src="communityimg.jpg" alt="image" />
            <h3 id="community-feeling">Write about your feelings and problems to get help & support from the community.</h3>

        </div>

        <div id="community-create-Box2">
            <h3 id="community-Post2">Discussion Forum</h3>
            <img id="community-right-arrow2" src="rightarrow.jpg" alt="right arrow " />
            <img id="community-middle-image" src="secondrowimage.jpg" alt="image" />
            <h3 id="community-feeling">Get connected to the community and help others.</h3>

        </div>
        <Bottom></Bottom>
    </div>
}