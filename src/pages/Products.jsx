import React from "react";

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
    <div
      style={{ padding: "80px 0", background: "#f5f7fa", minHeight: "100vh" }}
    >
      <h1
        style={{
          marginBottom: 32,
          textAlign: "center",
          fontWeight: 700,
          color: "#1976d2",
          letterSpacing: 1,
        }}
      >
        Catalogue
      </h1>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 32px rgba(25, 118, 210, 0.08)",
          padding: 40,
        }}
      >
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            style={{ marginBottom: idx < categories.length - 1 ? 40 : 0 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 18,
                borderRadius: 10,
                background:
                  "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                boxShadow: "0 2px 12px rgba(99,114,255,0.08)",
                padding: "14px 24px",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  color: "#fff",
                  marginRight: 14,
                }}
              >
                <i className={categoryStyles[idx].icon}></i>
              </span>
              <h2
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  margin: 0,
                  fontSize: 22,
                  letterSpacing: 1,
                }}
              >
                {cat.title}
              </h2>
            </div>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
              {cat.items.map((item) => (
                <li
                  key={item.code}
                  style={{
                    background: "#f5f7fa",
                    borderRadius: 8,
                    marginBottom: 14,
                    padding: "16px 20px",
                    boxShadow: "0 1px 6px rgba(25, 118, 210, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    transition:
                      "box-shadow 0.2s, transform 0.2s, background 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(99,114,255,0.18)";
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.02)";
                    e.currentTarget.style.background = "#e3e8ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 1px 6px rgba(25, 118, 210, 0.06)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.background = "#f5f7fa";
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: categoryStyles[idx].color,
                      fontSize: 16,
                      marginRight: 16,
                    }}
                  >
                    {item.code}
                  </span>
                  <span style={{ fontSize: 16 }}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
