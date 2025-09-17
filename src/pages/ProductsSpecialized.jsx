import React from "react";
const products = [
  {
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
  },
  {
    id: "CAAN101PS",
    name: "Angiography Pack With Instrument",
    contents: [
      "SURGEON GOWN - SIZE L - NO.2 (Reinforced ) HAND TOWEL - NO.4 (30x40CM Spunlace) BACK TABLE DRAPE 150 X 190CM - NO.1",
      "SURGICAL DRAPE 50 X 60 CM - NO.4 (50 GSM SSMMS) ANGIOGRAPHY Drape (50 GSM SSMMS) 230 X 360 CM - NO. 1 TRAY 32X 24X 6 cm -NO.1 (SAMARTH TRAY-02.V)",
      "BASIN 1000ML - NO.1 (Royalplast-3 Mixing Bowl) BASIN 500ML- NO.1 (Royalplast-2 Mixing bowl) DISINFECTION BRUSH 15CM-NO.3",
      "KIDNEY BASIN 750ML - NO. 1 (500ML)",
      "DRESSING CUP 120ML - NO. 2 (Royalplast-1 no.  Mixing bowl) ABDOMINAL PAD 75 X 56CM (73 GSM Laminated Spunlace GINNY)",
    ],
    specification: [
      "Material: Premium (50 GSM) SSMMS fabric with high fluid resistance.",
      "Sterilization: EO sterilized.",
    ],
    application: [
      "Specifically designed for angiography procedures, ensuring sterile conditions and precise fluid control.",
    ],
  },
];
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
const ProductsSpecialized = () => {
  return (
    <div
      style={{ padding: "80px 0", background: "#f5f7fa", minHeight: "100vh" }}
    >
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
        {products.map((product, idx) => (
          <table style={tableStyle} key={product.id}>
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
                  <ul style={{ margin: 0 }}>
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
                  <ul style={{ margin: 0 }}>
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
                  <ul style={{ margin: 0 }}>
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
        ))}
      </div>
    </div>
  );
};

export default ProductsSpecialized;
