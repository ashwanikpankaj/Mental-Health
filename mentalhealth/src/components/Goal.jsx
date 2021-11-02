import '../styles/goal.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'

export const Goal = () => {

    return (
        <>
            <div id="goal">
                <StaticHeader />
                <p id="whatisgoal">What is your Goal?</p>
                <img id="anxietyimg" src="anxiety.jpg"></img>
                <img id="mindfulnessimg" src="mindfulness.png"></img>
                <img id="sleepimg" src="sleep.jpg"></img>
                <img id="Stayfocusedimg" src="Stayfocused.jpg"></img>
                <p id="reduce">Reduce anxiety & depression</p>
                <p id="mind">Mindfulness</p>
                <p id="stay">Stay focused</p>
                <p id="sleep">Sleep</p>
                <Skip/>
            </div>
        </>
    )

}