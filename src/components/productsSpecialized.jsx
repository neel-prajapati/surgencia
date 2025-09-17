import React from "react";

const product = {
  id: "CAAN100PS",
  name: "Angiography Pack",
  contents: [
    "Angiography Drape (150x220 cm): With adhesive fenestration for catheterization.",
    "Instrument Table Cover: Sterile and fluid-resistant.",
    "Sterile Surgical Gown (2 pieces): Reinforced for fluid protection.",
    "Surgical Sponges (6 pieces): High absorbency and lint-free.",
    "Sterile Surgical Gloves (2 pairs): Powder-free, latex-free.",
    "Hand Towels (4 pieces): Sterile and absorbent.",
    "Guidewire Bowl: Sterile, anti-slip surface.",
    "Waste Bag: For proper disposal of medical waste.",
  ],
  specification: [
    "Material: Premium SMS fabric with high fluid resistance.",
    "Sterilization: EO sterilized.",
  ],
  application: [
    "Specifically designed for angiography procedures, ensuring sterile conditions and precise fluid control.",
  ],
};

const tableStyle = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 4px 32px rgba(99,114,255,0.10)",
  overflow: "hidden",
  margin: "40px auto",
};
const thStyle = {
  background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
  color: "#fff",
  fontWeight: 700,
  fontSize: 18,
  padding: "18px 20px",
  border: "none",
  textAlign: "left",
};
const tdStyle = {
  padding: "18px 20px",
  fontSize: 16,
  borderBottom: "1px solid #e3e8ff",
  verticalAlign: "top",
  background: "#f8faff",
};
const firstTdStyle = {
  ...tdStyle,
  fontWeight: 600,
  color: "#6372ff",
  background: "#eef3ff",
};

const productsSpecialized = () => (
  <div style={{ maxWidth: 900, margin: "60px auto", padding: "0 16px" }}>
    <h1
      style={{
        textAlign: "center",
        fontWeight: 700,
        color: "#6372ff",
        marginBottom: 32,
        letterSpacing: 1,
      }}
    >
      Specialized Product Details
    </h1>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Product ID</th>
          <td style={firstTdStyle}>{product.id}</td>
        </tr>
        <tr>
          <th style={thStyle}>Product Name</th>
          <td style={tdStyle}>{product.name}</td>
        </tr>
        <tr>
          <th style={thStyle}>Contents</th>
          <td style={tdStyle}>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {product.contents.map((c, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {c}
                </li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <th style={thStyle}>Specification</th>
          <td style={tdStyle}>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {product.specification.map((s, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {s}
                </li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <th style={thStyle}>Application</th>
          <td style={tdStyle}>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {product.application.map((a, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {a}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default productsSpecialized;
