import React from "react";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";

const categoryStyles = [
  { color: "#1976d2", icon: "fa fa-eye" },
  { color: "#c62828", icon: "fa fa-heartbeat" },
  { color: "#6a1b9a", icon: "fa fa-female" },
  { color: "#388e3c", icon: "fa fa-wheelchair" },
  { color: "#fbc02d", icon: "fa fa-brain" },
  { color: "#455a64", icon: "fa fa-user-md" },
  { color: "#0288d1", icon: "fa fa-tint" },
  { color: "#ff7043", icon: "fa fa-child" },
  { color: "#7b1fa2", icon: "fa fa-star-of-life" },
  { color: "#616161", icon: "fa fa-asterisk" },
];

const categories = [
  {
    title: " Eye Surgery Product DRAPES",
    items: [
      { code: "1 EYEY100DS", name: "Eye Drape" },
      { code: "2 EYEP100DS", name: "Eye Drape Poly" },
      { code: "3 EYER100DS", name: "Eye Drape Reinforced" },
    ],
  },
  {
    title: " Cardiac/Thoracic Surgery Products",
    items: [
      { code: "4 CTCT100DS", name: "Cardio Thoracic Drape" },
      { code: "5 CTCL100DS", name: "Cath lab Drape" },
      { code: "6 CTPC100DS", name: "Pace maker Drape" },
    ],
  },
  {
    title: " Obstetrics and Gynecology Products",
    items: [
      { code: "7 OGCA100DS", name: "Caesarean Drape" },
      { code: "8 OGFG100DS", name: "Full Gynec Drape" },
      { code: "9 OGUB100DS", name: "Under Buttocks Drapes" },
      { code: "10 OGIV100DS", name: "IVF Drape" },
      { code: "11 OGMT100DS", name: "Maternity Drape" },
    ],
  },
  {
    title: " Orthopedic Surgery Products",
    items: [
      { code: "12 ORBK100DS", name: "Bilateral Knee O Drape" },
      { code: "13 OREL100DS", name: "Elbow O Drape" },
      { code: "14 ORKA100DS", name: "Knee Arthroscopy Drape" },
      { code: "15 ORKO100DS", name: "Knee O Drape" },
      { code: "16 ORHU100DS", name: "Hip U Drape" },
      { code: "17 ORSU100DS", name: "Shoulder U Drape" },
      { code: "18 ORSA100DS", name: "Shoulder Arthroscopy drape" },
      { code: "19 ORLO100DS", name: "Leg O Drape" },
      { code: "20 ORLU100DS", name: "Leg U Drape" },
    ],
  },
  {
    title: " Neurosurgery Products",
    items: [
      { code: "21 NUCR100DS", name: "Craniotomy Drape" },
      { code: "22 NULS100DS", name: "Lamino Spinal Drape" },
    ],
  },
  {
    title: " General Surgery Products",
    items: [
      { code: "23 GEMJ100DS", name: "Major Drape" },
      { code: "24 GEIC100DS", name: "Incise Drape Large" },
      { code: "25 GEIC200DS", name: "Incise Drape Medium" },
      { code: "26 GEIC300DS", name: "Incise Drape Mini" },
      { code: "27 GEIC400DS", name: "Incise Drape Small" },
      { code: "28 GEIC500DS", name: "Incise Drape X-Large" },
      { code: "29 GEHT100DS", name: "Hole Towel" },
      { code: "30 GEPT100DS", name: "Plain Towel" },
      { code: "31 GEAD00DS", name: "Adhesive Drape Sheet" },
      { code: "32 GECL100DS", name: "Cling Drape" },
    ],
  },
  {
    title: " Urology Products",
    items: [
      { code: "33 URPC100DS", name: "PCNL Drape" },
      { code: "34 URTR100DS", name: "Turp Drape" },
    ],
  },
  {
    title: " Pediatrics/Infant Care Products",
    items: [{ code: "35 PEBY100DS", name: "Baby Drape" }],
  },
  {
    title: " Specialized Surgical Products",
    items: [
      { code: "36 SPAG100DS", name: "Angiography Drape" },
      { code: "37 SPAP100DS", name: "Angioplasty Drape" },
      { code: "38 SPVS100DS", name: "VSD Drape" },
    ],
  },
  {
    title: " Miscellaneous",
    items: [
      { code: "39 MSFO100DS", name: "Folio Drape" },
      { code: "40 MSOH100DS", name: "O-Hole Drape" },
      { code: "41 MSAR100DS", name: "ARM Drape" },
    ],
  },
];

const Products = () => {
  return (
    <PageTransition>
      <div className="product-catalog-container">
        <AnimatedSection animation="fadeUp">
          <h1 className="product-catalog-title">
            Catalogue
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={0.1}>
          <div className="product-catalog-wrapper">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="product-category-section"
              >
                <div className="product-category-header">
                  <span className="category-icon-wrapper">
                    <i className={categoryStyles[idx].icon}></i>
                  </span>
                  <h2>{cat.title}</h2>
                </div>
                <ul className="product-items-list">
                  {cat.items.map((item) => (
                    <li
                      key={item.code}
                      className="product-item"
                    >
                      <span
                        className="product-code"
                        style={{ color: categoryStyles[idx].color }}
                      >
                        {item.code}
                      </span>
                      <span className="product-name">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

export default Products;
