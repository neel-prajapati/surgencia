import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link to="/about" className="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </Link>{" "}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
