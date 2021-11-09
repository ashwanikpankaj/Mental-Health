import { useParams } from 'react-router'
import '../styles/doctors.css'
import { StaticHeader } from './Staticheader'
// import { Link } from 'react-router-dom'

export const Doctors = () => {

    const obj = useParams();

    console.log(obj.id)
    
    return (
        <>
            <div id="doctorspage">
                <StaticHeader />
                <h1>Hello</h1>
            </div>
        </>
    )

}