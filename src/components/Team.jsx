import React from "react";
import { motion } from "framer-motion";

export const Team = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <motion.div
          className="col-md-8 col-md-offset-2 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Meet the Team</h2>
          <p>
            At Surgencia, our strength lies in the people behind the innovation.
            Our team of experienced professionals is dedicated to delivering
            safe, reliable, and high-quality surgical drape solutions that
            healthcare providers can trust.
          </p>
        </motion.div>
        <motion.div
          id="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 team"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </motion.div>
      </div>
    </div>
  );
};
