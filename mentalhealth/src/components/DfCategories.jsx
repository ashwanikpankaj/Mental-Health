import { StaticHeader } from "./Staticheader";
import "../styles/dfcategories.css";
import styled from "styled-components";
import { Bottom } from "./Bottom";

function Dfcategories() {
  const Button = styled.button`
    position: absolute;
    left: 24px;
    height: 82px;
    width: 359px;
    border-radius: 8px;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: #37474f;
    border: 0px;
  `;
  return (
    <div id="dfcategory-cont">
      <StaticHeader></StaticHeader>
      <div className="category-heading">
        <button className="category-heading-btn">
          {" "}
          <img src="leftarrow.png" />
        </button>
        <h1>CATEGORIES</h1>
      </div>

      <Button className="all-btn">ALL</Button>
      <Button className="category-anxiety-btn">Anxiety & Depression</Button>
      <Button className="category-mindfulness-btn">Mindfulness</Button>
      <Button className="category-focus-btn">Focus and concentration</Button>
      <Button className="category-sleep-btn"> Sleep issues</Button>
      <Bottom/>
    </div>
  );
}

export { Dfcategories };
