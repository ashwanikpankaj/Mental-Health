import '../styles/goodbad.css'

export const Goodbad = () => {

    return (
        <>
            <div id="goodbad">
                <p id="feeling">How are you feeling?</p>
                <img id="good" src='good.jpg'></img>
                <img id="bad" src='bad.jpg'></img>
                <p>GOOD</p>
                <p>BAD</p>
                <button>Skip</button>
            </div>
        </>
    )

}