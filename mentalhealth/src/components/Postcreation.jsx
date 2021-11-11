import { StaticHeader } from "./Staticheader";
import { Bottom } from "./Bottom";
import "../styles/postcreation.css";
import axios from 'axios';
import { useEffect, useState } from 'react'

export const Postissue = () => {

    const { user } = JSON.parse(localStorage.getItem("data"))

    const [btns, setbtns] = useState([])

    const [postData, SetpostData] = useState({
        message: "",
        category: "",
        userid: user._id,
        replycount:0,
        likescount:0
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = () => {
        axios
            .get("http://localhost:7765/categories", { withCredentials: true })
            .then(res => {
                setbtns(res.data.categories)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    const handleChange = (e) => {

        const { name, value} = e.target;

        SetpostData({
            ...postData,
            [name]: value
        })

        console.log(name,value)
    }

    const sendData = (e) =>{
        e.preventDefault()
        console.log(postData)

        axios.post("http://localhost:7765/posts", postData)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    return (
        <div id="posttheissue">
            <StaticHeader />

            <h1>Hello</h1>
            <h1>Hello</h1>

            <form id="formdata" onSubmit={sendData}>

                <select name="category" onChange={handleChange}>
                    <option value="">Choose Category</option>
                    {btns.map((e, index) => (
                        <option key={index} value={e._id}>{e.categoryname}</option>
                    ))}
                </select>

                <input type="text" id="postinput" onChange={handleChange} name="message"/>
                <input type="submit" value="Post" />

            </form>

            <Bottom />
        </div>
    );
}
