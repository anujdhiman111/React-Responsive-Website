import React from "react";
import Card from "./Card";
import Web from "../src/images/top11.png";
import App from "../src/images/app.jpg";
import Software from "../src/images/software.jpg";
import Marketing from "../src/images/marketing.jpg";
import Digital from "../src/images/digital.jpeg";
import Android from "../src/images/Android.png";

const Service = () => {
  return(
    <>
    <div className = "my-4">
      <h1 className = "text-center">Our Services</h1>
    </div>
    <div className = "container-fluid mb-5">
      <div className = "row">
        <div className = "col-10 mx-auto">
          <div className = "row gy-5">
            <Card title = "Web Development" imgSrc = {Web}/>
            <Card title = "App Development" imgSrc = {App}/>
            <Card title = "Software Development" imgSrc = {Software}/>
            <Card title = "Marketing" imgSrc = {Marketing}/>
            <Card title = "Digital Marketing" imgSrc = {Digital}/>
            <Card title = "Android Development" imgSrc = {Android}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Service;
