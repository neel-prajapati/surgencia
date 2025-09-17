import React from "react";
import { Header } from "../components/header";
import JsonData from "../data/data.json";

const HeaderPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Header data={JsonData.Header} />
  </div>
);

export default HeaderPage;
