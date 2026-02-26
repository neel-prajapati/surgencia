import React from "react";
import { Features } from "../components/features";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const FeaturesPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Features data={JsonData.Features} />
    </div>
  </PageTransition>
);

export default FeaturesPage;
