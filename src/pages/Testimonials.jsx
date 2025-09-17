import React from "react";
import { Testimonials } from "../components/testimonials";
import JsonData from "../data/data.json";

const TestimonialsPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Testimonials data={JsonData.Testimonials} />
  </div>
);

export default TestimonialsPage;
