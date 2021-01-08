import React, { useState } from "react";

const Contact = () => {
  const[data,setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const {name,value} = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]:value,
      };
    });
  }
  const formSubmit = (e) => {
    alert("Your Form is Submitted");
  }
  return(
    <>
      <div className = "my-5">
        <h1 className = "text-center">
          Contact Us
        </h1>
      </div>
      <div className = "container contact-container">
        <div className = "row">
          <div className = "col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text"
              className="form-control"
              id="exampleFormControlInput1" 
              name = "fullname"
              value = {data.fullname}
              onChange = {inputEvent}
              placeholder="Enter your Name" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput12" className="form-label">Phone No.</label>
              <input type="telephone"
              className="form-control"
              id="exampleFormControlInput12" 
              name = "phone"
              value = {data.phone}
              onChange = {inputEvent}
              placeholder="Enter your Mobile No." required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput13" className="form-label">Email address</label>
              <input type="email"
              className="form-control"
              id="exampleFormControlInput13" 
              name = "email"
              value = {data.email}
              onChange = {inputEvent}
              placeholder="Enter your Email" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea14" className="form-label">Message</label>
              <textarea className="form-control" 
              id="exampleFormControlTextarea14" 
              rows="3" 
              name = "msg"
              value = {data.msg}
              onChange = {inputEvent} required></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" onClick = {formSubmit} type="submit">Submit form</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
