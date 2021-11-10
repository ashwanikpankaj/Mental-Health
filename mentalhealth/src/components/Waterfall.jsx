import { StaticHeader } from './Staticheader'
import "../styles/waterfall.css";
import YouTube from "react-youtube";
import { Bottom } from './Bottom';

export const Waterfall = () => {
  const opts = {
    height: "218",
    width: "411",
    playerVars: {
      autoplay: 0, // autoplay off it
    },
  };
  return (
    <div id="waterfall-cont" >
      <div style={{marginBottom:"0px"}}>5</div>
      <StaticHeader></StaticHeader>
      
      <div className="waterfall-heading-div">
        <img src="leftarrow.png" onClick={() => console.log("hello")}  alt="leftarrow"/>
        <h1>Waterfall</h1>
      </div>
      <div className="waterfall-video-div">
        {/*  <img src="waterfallvideo.png"/> */}
        <YouTube videoId="MFLVmAE4cqg" opts={opts} />
      </div>
      <h1 id="breathe-text">Take a deep breathe and walk through nature.</h1>
      <div id="relax-text">
        {" "}
        Relaxing virtual environments (VEs) can help you learn and practice self
        love management skills.
      </div>
      <button id="play">Play</button>
      <button id="download">Download</button>
      <div id="vr-headset">
        <h1>How to connect VR headset?</h1>
        <img src="waterfallrightarrow.png" alt="waterfall"/>
      </div>
      <h1 id="buy">BUY VR Headset at 50% off</h1>
      <button id="buy-btn">Click to buy -</button>
      <a id="amazon" href="https://www.amazon.in/">
        amazon.in
      </a>
      <Bottom/>
    </div>
  );
};
