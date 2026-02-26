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

const productsSpecialized = () => (
  <div className="specialized-product-container">
    <h1 className="specialized-product-title">
      Specialized Product Details
    </h1>
    <div className="specialized-table-wrapper">
      <table className="specialized-product-table">
        <tbody>
          <tr>
            <th>Product ID</th>
            <td className="product-id-cell">{product.id}</td>
          </tr>
          <tr>
            <th>Product Name</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>Contents</th>
            <td>
              <ul>
                {product.contents.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Specification</th>
            <td>
              <ul>
                {product.specification.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Application</th>
            <td>
              <ul>
                {product.application.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default productsSpecialized;
