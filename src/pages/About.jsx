import React from "react";
import { About } from "../components/about";
import JsonData from "../data/data.json";

const AboutPage = () => (
  <div style={{ padding: "100px 0" }}>
    <About data={JsonData.About} />
  </div>
);

export default AboutPage;
