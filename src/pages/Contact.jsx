import React from "react";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const ContactPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Contact data={JsonData.Contact} />
  </div>
);

export default ContactPage;
