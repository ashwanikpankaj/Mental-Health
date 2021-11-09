import { useParams } from 'react-router'
import '../styles/doctors.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Doctors = () => {

    const obj = useParams();
    const [doclist, setDocList] = useState([])


    console.log(obj.id)

    useEffect(() => {
        fetchDoctors()
    }, [])

    const fetchDoctors = () => {
        axios
            .get(`http://localhost:7765/doctors/category/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.doctor)
                setDocList(res.data.doctor)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <>
            <div id="doctorspage">
                <StaticHeader></StaticHeader>
                <h1>Hello</h1>

                {
                    doclist.map((e) => (
                        <div>
                            <h1>{e.name}
                                <Link to={`/individualdoctor/${e._id}`}>
                                    <button>Details</button>
                                </Link>

                            </h1>

                        </div>
                    ))
                }
            </div>
        </>
    )

}