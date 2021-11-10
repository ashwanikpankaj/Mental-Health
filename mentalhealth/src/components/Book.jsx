import { StaticHeader } from "./Staticheader";
import "../styles/book.css"
import { Heading } from "./Heading";

function Book (){

    return (
        <div id="book-cont">
            <StaticHeader/>
           <Heading image={"leftarrow.png"} heading={"BOOK"}/>
        </div>
    )
}

export {Book}