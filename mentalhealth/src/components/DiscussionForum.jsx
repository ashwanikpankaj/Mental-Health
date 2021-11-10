import { StaticHeader } from "./Staticheader";
import "../styles/discussionforum.css";
import { Bottom } from "./Bottom";
import { Link } from 'react-router-dom'

export const DiscussionForum = () => {

    return (
        <div id="forum">
            <StaticHeader/>

            <Link to="/posttheissue">
                <button id="btn1">Create a Post</button>
            </Link>

            <Link to="/categories">
                <button id="btn2">Discussion Forum</button>
            </Link>

            <Bottom />
        </div>
    );
}
