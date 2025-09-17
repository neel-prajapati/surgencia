import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="section-title" style={{ textAlign: "center" }}>
                <h2>Get In Touch</h2>
                <p>
                  Please reach out to us from any of the below communication
                  means and we will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <p>
                      <span>
                        <i className="fa fa-map-marker"></i> &nbsp;
                      </span>
                      {props.data ? props.data.address : "loading"}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <i className="fa fa-phone"></i>
                      </span>{" "}
                      {props.data ? props.data.phone : "loading"}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <i className="fa fa-envelope-o"></i>
                      </span>{" "}
                      {props.data ? props.data.email : "loading"}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    {/* <Link to={props.data ? props.data.facebook : "/"}> */}
                    <i className="fa fa-facebook"></i>
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to={props.data ? props.data.twitter : "/"}> */}
                    <i className="fa fa-twitter"></i>
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to={props.data ? props.data.youtube : "/"}> */}
                    <i className="fa fa-youtube"></i>
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; Designed by CruisingBytes</p>
        </div>
      </div>
    </div>
  );
};
