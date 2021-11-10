import { StaticHeader } from "./Staticheader";
import "../styles/postshow.css";
import axios from 'axios';
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Postshow = () => {

    const obj = useParams();
    const [postlist, setPostList] = useState([])

    useEffect(() => {
        fetchposts()
    }, [])

    const fetchposts = () => {

        const URL = obj.id === "all" ? "http://localhost:7765/posts" : `http://localhost:7765/posts/category/${obj.id}`

        axios
            .get(URL, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.post)
                setPostList(res.data.post)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <>
            <div id="postshow">
                <StaticHeader></StaticHeader>
                <h1>Hello</h1>
                <h1>Hello</h1>
                {
                    postlist.map((e) => (
                        <div>
                            <Link to={`/individualpost/${e._id}`}>
                                <h1>{e.message}</h1>
                            </Link>
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}