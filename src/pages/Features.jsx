import React from "react";
import { Features } from "../components/features";
import JsonData from "../data/data.json";

const FeaturesPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Features data={JsonData.Features} />
  </div>
);

export default FeaturesPage;
