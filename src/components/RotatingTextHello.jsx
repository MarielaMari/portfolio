import React from "react";
import { RotatingText } from "rotating-text";
import "rotating-text/dist/index.css";
import { Color } from "three";

const RotatingTextHello = () => (
  <RotatingText
    text="Hello,&nbsp;I&nbsp;am&nbsp;Mari!"
    stagger={0.1}
    timing={0.5}
    className="rotating-text"
    style={{ fontSize: "75px", height: "30vh", Color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%"}}
  />
);

export default RotatingTextHello;
