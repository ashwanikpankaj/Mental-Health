import { useState } from "react";
import "../styles/staticHeader.css";

export const StaticHeader = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  checkTime(h);
  checkTime(m);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const [time, setTime] = useState(`${h}:${m}`);

  const updateTime = () => {
    setTime(`${h}:${m}`);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="headerBox">
        <p id="time">{time}</p>
        <img id="wifi" src="/wifi.jpg" alt="alt"></img>
        <img id="tower" src="/tower.jpg" alt="alt"></img>
        <img id="battery" src="/battery.jpg" alt="alt"></img>
      </div>
    </>
  );
};
