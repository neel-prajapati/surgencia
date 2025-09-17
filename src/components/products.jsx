import React from "react";

export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>We've got you Covered! </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
