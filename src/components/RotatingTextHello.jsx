import React from "react";
import RotatingText from "./components/RotatingText.jsx";
import "rotating-text/dist/index.css";

const RotatingTextHello = () => (
  <RotatingText
    text="Hello,&nbsp;I&nbsp;am&nbsp;Mari!"
    stagger={0.1}
    timing={0.5}
    className="rotating-text"
    style={{ fontSize: "75px" }}
  />
);

export default RotatingTextHello;
