import React from "react";
import { Gallery } from "../components/gallery";
import JsonData from "../data/data.json";

const GalleryPage = () => (
  <div style={{ padding: "100px 0" }}>
    <Gallery data={JsonData.Gallery} />
  </div>
);

export default GalleryPage;
