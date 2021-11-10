import { useParams } from 'react-router'
import '../styles/individualpost.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

export const Individualpost = () => {

    const obj = useParams();
    const [post, setPost] = useState({})

    console.log(obj.id)

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = () => {
        axios
            .get(`http://localhost:7765/posts/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setPost(res.data.post)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <>
            <div id="doctorpage">
                <StaticHeader />
                <h1>Hello</h1>

                <div>
                    <h1>{post.message}</h1>
                    <form>
                        <input type="text" placeholder="add your reply" />
                        <input type="submit" value="Reply" />
                    </form>
                </div>
            </div>
        </>
    )

}