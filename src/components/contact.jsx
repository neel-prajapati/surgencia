import React from "react";
import { motion } from "framer-motion";

export const Contact = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <motion.div
                className="section-title"
                style={{ textAlign: "center" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Get In Touch</h2>
                <p>
                  Please reach out to us from any of the below communication
                  means and we will get back to you as soon as possible.
                </p>
              </motion.div>
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
              <motion.div
                className="social"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <ul>
                  <motion.li variants={itemVariants}>
                    <p>
                      <span>
                        <i className="fa fa-map-marker"></i> &nbsp;
                      </span>
                      {props.data ? props.data.address : "loading"}
                    </p>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <p>
                      <span>
                        <i className="fa fa-phone"></i>
                      </span>{" "}
                      {props.data ? props.data.phone : "loading"}
                    </p>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <p>
                      <span>
                        <i className="fa fa-envelope-o"></i>
                      </span>{" "}
                      {props.data ? props.data.email : "loading"}
                    </p>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            <div className="row">
              <motion.div
                className="social"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ul>
                  <li>
                    {/* <Link to={props.data ? props.data.facebook : "/"}> */}
                    <motion.i
                      className="fa fa-facebook"
                      whileHover={{ scale: 1.2, color: "#4267B2" }}
                      transition={{ duration: 0.2 }}
                    ></motion.i>
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to={props.data ? props.data.twitter : "/"}> */}
                    <motion.i
                      className="fa fa-twitter"
                      whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                      transition={{ duration: 0.2 }}
                    ></motion.i>
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to={props.data ? props.data.youtube : "/"}> */}
                    <motion.i
                      className="fa fa-youtube"
                      whileHover={{ scale: 1.2, color: "#FF0000" }}
                      transition={{ duration: 0.2 }}
                    ></motion.i>
                    {/* </Link> */}
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        id="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container text-center">
          <p>&copy; Designed by CruisingBytes</p>
        </div>
      </motion.div>
    </div>
  );
};
