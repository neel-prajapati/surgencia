import React from "react";
import { Gallery } from "../components/gallery";
import PageTransition from "../components/PageTransition";
import JsonData from "../data/data.json";

const GalleryPage = () => (
  <PageTransition>
    <div style={{ padding: "100px 0" }}>
      <Gallery data={JsonData.Gallery} />
    </div>
  </PageTransition>
);

export default GalleryPage;
