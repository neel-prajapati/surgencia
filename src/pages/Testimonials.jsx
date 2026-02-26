import React from "react";
import { Testimonials } from "../components/testimonials";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const TestimonialsPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Testimonials data={JsonData.Testimonials} />
    </div>
  </PageTransition>
);

export default TestimonialsPage;
