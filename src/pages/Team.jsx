import React from "react";
import { Team } from "../components/Team";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const TeamPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Team data={JsonData.Team} />
    </div>
  </PageTransition>
);

export default TeamPage;
