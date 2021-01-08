import Images from "../src/images/img.jpeg";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return(
    <>
    <section id  = "header" className = "d-flex align-items-center">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-10 mx-auto">
            <div className = "row">
            <div className = "col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column">
              <h1>
                {props.heading}
              </h1>
              <h3 className = "my-2">
                I am A talented Web Developer. 
              </h3>
              <div className = "mt-3">
                <NavLink to = {props.visit} className = "btn btn-success">{props.btnName}</NavLink>
              </div>
              </div> 
              <div className = "col-lg-6 header-img">
                <img src = {props.imgsrc} className = "home-img" alt = "Home Image" />
              </div>
             
            </div>  
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default Common;
