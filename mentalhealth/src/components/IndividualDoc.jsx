import { useParams } from 'react-router'
import '../styles/individualdoc.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

export const Individualdoctor = () => {

    const obj = useParams();
    const [doc, setDoc] = useState({})

    console.log(obj.id)

    useEffect(() => {
        fetchDoctor()
    }, [])

    const fetchDoctor = () => {
        axios
            .get(`http://localhost:7765/doctors/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.doctor)
                setDoc(res.data.doctor)
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
                            <h1>{doc.name}</h1>
                            <button>Book</button>
                        </div>
            </div>
        </>
    )

}