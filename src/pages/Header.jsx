import React from "react";
import { Header } from "../components/header";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const HeaderPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Header data={JsonData.Header} />
    </div>
  </PageTransition>
);

export default HeaderPage;
