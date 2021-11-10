import { useParams } from 'react-router'
import '../styles/individualpost.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

export const Individualpost = () => {

    const { user } = JSON.parse(localStorage.getItem("data"))

    const obj = useParams();
    const [post, setPost] = useState({})
    const [replies, setReplies] = useState([])
    const [like,setLike] = useState(null)
    const [allLike,setAll] = useState(null)
    const [comments,setComment] = useState(null)

    const [replyData, SetreplyData] = useState({
        message: "",
        postid: obj.id,
        likes: 0,
    })

    console.log(obj.id)

    useEffect(() => {
        fetchPost()
        fetchReplies()
        likedornot()
    }, [])

    useEffect(() => {
        AllLikes()
    }, [like])

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

    const fetchReplies = () => {
        axios
            .get(`http://localhost:7765/replies/post/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setReplies(res.data.reply)
                setComment(res.data.reply.length)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    const AllLikes =() =>{
        axios
        .get(`http://localhost:7765/likes/post/${obj.id}`, { withCredentials: true })
        .then(res => {
            console.log("Alllikes", res.data.like.length)
            setAll(res.data.like.length)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }

    const likedornot =() =>{
        axios
        .get(`http://localhost:7765/likes/percomment/${obj.id}/${user._id}`, { withCredentials: true })
        .then(res => {
            console.log("likedata", res.data)
            res.data.like.length>0?setLike(true):setLike(false)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }


    const LikeDislike =() =>{

        if(like){
            axios
            .delete(`http://localhost:7765/likes/deletelike/${obj.id}/${user._id}`, { withCredentials: true })
            .then(res => {
                console.log("likedata", res.data)
                setLike(false)
            })
            .catch(err => {
                console.log("Error", err);
            })

        }else{
            //post the like

            axios
            .post(`http://localhost:7765/likes`, {userid:user._id,postid:obj.id})
            .then(res => {
                console.log("likedata", res.data)
                setLike(true)
            })
            .catch(err => {
                console.log("Error", err);
            })

        }

    }

    const handleChange = (e) => {

        const { name, value} = e.target;

        SetreplyData({
            ...replyData,
            [name]: value
        })

        console.log(name,value)
    }

    const sendData = (e) =>{
        e.preventDefault()
        console.log(replyData)

        axios.post("http://localhost:7765/replies", replyData)
        .then(res => {
          console.log(res);
          console.log(res.data);
          fetchReplies()
        })
    }

    return (
        <>
            <div id="doctorpage">
                <StaticHeader />
                <h1>Hello</h1>

                <div>
                    <h1>{post.message}</h1>
                    <h1>{allLike}:Likes</h1>
                    <h1>{comments}:comments</h1>
                    <button onClick={LikeDislike}>{like?"Dislike":"Like"}</button>
                    <form onSubmit={sendData}>
                        <input type="text" name="message" onChange={handleChange} placeholder="add your reply" />
                        <input type="submit" value="Reply" />
                    </form>
                </div>

                {replies.map((e)=>(
                    <h1>{e.message}</h1>
                ))}
            </div>
        </>
    )

}