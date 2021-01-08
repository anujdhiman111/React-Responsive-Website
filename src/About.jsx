import React from "react";
import Common from "./Common";
import Images from "../src/images/images5.png";
const About = () => {
  return(
    <>
    <Common heading = "Welcome to About Page" imgsrc = {Images}
    visit = "./Contact" btnName = "Contact Now"/>
    </>
  );
}
export default About;
