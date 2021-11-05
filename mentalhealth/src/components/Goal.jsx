import '../styles/goal.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'
import { Link, Redirect, useHistory } from 'react-router-dom'

export const Goal = () => {

    return (
        <>
            <div id="goal">
                <StaticHeader />
                <p id="whatisgoal">What is your Goal?</p>

                <Link to="/funtest">
                    <img id="anxietyimg" src="anxiety.jpg"></img>
                </Link>

                <Link to="/funtest">
                    <img id="mindfulnessimg" src="mindfulness.png"></img>
                </Link>

                <Link to="/funtest">
                    <img id="sleepimg" src="sleep.jpg"></img>
                </Link>

                <Link to="/funtest">
                    <img id="Stayfocusedimg" src="Stayfocused.jpg"></img>
                </Link>



                <p id="reduce">Reduce anxiety & depression</p>
                <p id="mind">Mindfulness</p>
                <p id="stay">Stay focused</p>
                <p id="sleep">Sleep</p>

                <Link to="/funtest">
                    <Skip prop="Skip" />
                </Link>


            </div>
        </>
    )

}