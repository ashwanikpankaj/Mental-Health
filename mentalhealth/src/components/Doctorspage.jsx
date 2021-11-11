import { useParams } from 'react-router'
import '../styles/doctors.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from './Heading';
import { Bottom } from './Bottom';


export const Doctors = () => {

    const obj = useParams();
    const [doclist, setDocList] = useState([])
    const [category, setCategory] = useState("")

    console.log(obj.id)

    useEffect(() => {
        fetchDoctors()
        fetchCatgory()
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

    const fetchCatgory = () => {
        axios
            .get(`http://localhost:7765/categories/${obj.id}`, { withCredentials: true })
            .then(res => {
                // console.log("data", res.data.category.categoryname)
                setCategory(res.data.category.categoryname)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <div id="doctorspage">
            <StaticHeader></StaticHeader>
            <Heading image="/leftarrow.png" heading={category} />

            <div id="mainDiv">
                {
                    doclist.map((e) => (
                        <div id="docDiv">
                            <div>
                                <img id="docimage" src={e.photo}></img>
                                <h3>Dr.{e.name}</h3>
                                <p className="docDetails">{e.profession}</p>
                            </div>
                            <div>
                                <p className="docDetails"><strong>SPECIALIST - </strong>{e.specialization.map((item)=>item.categoryname).join(",")}</p>
                                <p className="docDetails"><strong>QUALIFICATION - </strong>{e.qualification}</p>
                                <p className="docDetails">Rating: {e.ratings}</p>
                                <Link to={`/individualdoctor/${e._id}`}>
                                    <button>Details</button>
                                </Link>
                                <Link to={`/booking/${e._id}`}>
                                    <button>Book</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div id="docbottom">
                <hr id="docbottom1" />
            </div>
        </div>
    )

}