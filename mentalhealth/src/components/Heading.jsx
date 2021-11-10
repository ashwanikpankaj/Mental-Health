import "../styles/heading.css"

function Heading({image,heading}){
    return (
        <div id="heading-div">
        <button>
          <img src={image} />
        </button>
        <div>{heading}</div>
      </div>
    )
   
}
export {Heading}