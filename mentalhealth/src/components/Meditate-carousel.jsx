import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { StaticHeader } from "./Staticheader";
import { BottomNavBar } from "../components/Bottom-nav-bar";
import { Bottom } from "../components/Bottom";
import "../styles/meditate-carousel.css";

const items = [
  {
    source: "virtualreality.png",
    title: "Meditate with VR",
    desc: "Helping you deal with real world situations with VR and make you feel it for real at our space.",
  },
  {
    source: "listeningmusic.png",
    title: "Sound that heals your mind.",
    desc: "The sound therapy revive your mood and positive vibes in you.",
  },
  {
    source: "yog.png",
    title: "Embrace yourself with yog",
    desc: "Yoga helps you release all the tension and bring in eepositive energy in you.",
  },
];

function MeditateCrousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  return (
    <div id="meditate-crousel-cont">
      <StaticHeader></StaticHeader>
      <div id="meditate-heading-div">
        <button>
          <img src="leftarrow.png" alt="leftarrow"/>
        </button> 
        <div>MEDITATE</div>
      </div>
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        showArrows={false}
        pagination={false}
        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
      >
        {items.map((item, i) => (
          <div key={i} className="slider-div">
            <img src={item.source} alt="splash" width="90%" />
            <div className="slider-title">{item.title}</div>
            <div className="slider-description">{item.desc}</div>
          </div>
        ))}
      </Carousel>
      <BottomNavBar />
      <Bottom />
    </div>
  );
}
export { MeditateCrousel };
