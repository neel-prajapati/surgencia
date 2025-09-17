import React from "react";
export const Contact = (props) => {
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
