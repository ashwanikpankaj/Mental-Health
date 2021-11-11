import { useHistory, useParams } from 'react-router'
import '../styles/bookingpage.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useState } from 'react';

export const Book = () => {

    const history = useHistory();
    const { user } = JSON.parse(localStorage.getItem("data"))

    const obj = useParams();
    const [slots, setSlots] = useState([])
    const [bookData, SetbookData] = useState({
        userid: user._id,
        doctorid: obj.id,
        time: "",
        date: "",
        sessiontype: ""
    })

    const [personal,setPersonal]= useState({
        phone:"",
        email:""
    })

    console.log(obj.id)

    const selecteDate = (e) => {

        const { name, value } = e.target;

        SetbookData({
            ...bookData,
            [name]: value
        })

        console.log(name, value)

        //make axios get call in appoinment with doctor id and date
        axios
            .get(`http://localhost:7765/appointments/searchappointment/${e.target.value}/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setSlots(res.data.filteredslots)
            })
            .catch(err => {
                console.log("Error", err);
            })

        //i will get an array of slots which i will pass in a state which will be shown to user

    }

    const handleChange = (e) => {

        const { name, value } = e.target;

        SetbookData({
            ...bookData,
            [name]: value
        })

        console.log(name, value)
    }

    const handlePersonalDetails = (e) => {

        const { name, value } = e.target;

        setPersonal({
            ...personal,
            [name]: value
        })

        console.log(name, value)
    }

    const sendData = (e) =>{
        e.preventDefault()
        console.log(bookData)
        localStorage.setItem("bookData",JSON.stringify(bookData))
        localStorage.setItem("personal",JSON.stringify(personal))
        history.push("/therapistappointment");
    }

    return (
        <>
            <div id="bookpage">
                <StaticHeader />
                <h1>Hello</h1>

                <form id="formdata" onSubmit={sendData}>

                    <input onChange={selecteDate} type="date" name="date" /><br />

                    <div>
                        <input onChange={handleChange} type="radio" id="chat" name="sessiontype" value="CHAT" />
                        <label for="chat">Chat Consultation - Rs 399</label><br />
                    </div>
                    <div>
                        <input onChange={handleChange} type="radio" id="video" name="sessiontype" value="VIDEO" />
                        <label for="video">Video Consultation - Rs 599</label><br />
                    </div>

                    <select name="time" onChange={handleChange}>
                        <option value="">Choose Category</option>
                        {slots.map((e, index) => (
                            <option key={index} value={e}>{e}</option>
                        ))}
                    </select>
                    <br />
                    <input type="text" name="phone" onChange={handlePersonalDetails}/>
                    <label for="chat">Enter phone number</label><br />
                    <input type="email" name="email" onChange={handlePersonalDetails}/>
                    <label for="chat">Enter email id</label><br />

                    <input type="submit" value="Book" /><br />

                </form>



            </div>
        </>
    )

}