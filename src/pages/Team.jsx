import React from "react";
import { Team } from "../components/Team";
import JsonData from "../data/data.json";

const TeamPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Team data={JsonData.Team} />
  </div>
);

export default TeamPage;
