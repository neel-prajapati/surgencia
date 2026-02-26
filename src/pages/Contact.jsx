import React from "react";
import { Contact } from "../components/contact";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const ContactPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Contact data={JsonData.Contact} />
    </div>
  </PageTransition>
);

export default ContactPage;
