import React from "react";
import { About } from "../components/about";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const AboutPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <About data={JsonData.About} />
    </div>
  </PageTransition>
);

export default AboutPage;
