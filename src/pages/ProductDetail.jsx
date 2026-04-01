import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import WatermarkedImage from "../components/WatermarkedImage";
import { productCategories } from "../data/productsData";

function adjustColor(color, amount) {
  const clamp = (val) => Math.min(255, Math.max(0, val));
  let hex = color.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const num = parseInt(hex, 16);
  const r = clamp((num >> 16) + amount);
  const g = clamp(((num >> 8) & 0x00ff) + amount);
  const b = clamp((num & 0x0000ff) + amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = productCategories.find((c) => c.id === id);

  if (!category) {
    return (
      <PageTransition>
        <section className="product-detail-page">
          <div className="container" style={{ paddingTop: 120, textAlign: "center" }}>
            <h2>Product not found</h2>
            <button className="btn-back" onClick={() => navigate("/all-products")}>
              <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>Back to Products
            </button>
          </div>
        </section>
      </PageTransition>
    );
  }

  const { title, icon, color, image, description, items } = category;

  return (
    <PageTransition>
      <section className="product-detail-page">
        {/* Hero */}
        <div
          className="detail-hero"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 40)} 100%)`,
          }}
        >
          <button className="btn-back" onClick={() => navigate("/all-products")}>
            <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>Back to Products
          </button>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-icon">
              <i className={icon}></i>
            </div>
            <h1 className="hero-title">{title}</h1>
          </motion.div>
        </div>

        {/* Body */}
        <div className="container detail-body">
          {/* Image + Description */}
          <motion.div
            className="detail-intro"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="detail-image-wrap">
              <WatermarkedImage src={image} alt={title} className="detail-image" />
              <div
                className="image-overlay"
                style={{
                  background: `linear-gradient(135deg, ${color}33 0%, ${adjustColor(color, 40)}22 100%)`,
                }}
              />
            </div>
            <div className="detail-description">
              <h2 style={{ color }}>About this Product</h2>
              <p>{description}</p>
            </div>
          </motion.div>

          {/* Items */}
          {items && items.length > 0 && (
            <motion.div
              className="detail-items-section"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="items-heading" style={{ color }}>
                <i className={icon} style={{ marginRight: 10 }}></i>
                Product Range
              </h2>
              <div className="items-grid">
                {items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="item-card"
                    style={{ borderTop: `3px solid ${color}` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.35 + idx * 0.07 }}
                  >
                    <div className="item-card-header">
                      <span className="item-card-icon" style={{ color }}>
                        <i className={item.icon || "fa fa-check-circle"}></i>
                      </span>
                      <span className="item-card-name">{item.name}</span>
                    </div>
                    {item.subitems && item.subitems.length > 0 && (
                      <ul className="item-card-subitems">
                        {item.subitems.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <i className="fa fa-angle-right" style={{ color, marginRight: 6 }}></i>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <style>{`
        .product-detail-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f5f7fa 0%, #e8ecf1 100%);
        }

        .detail-hero {
          position: relative;
          padding: 80px 40px 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          min-height: 260px;
        }

        .btn-back {
          position: absolute;
          top: 90px;
          left: 40px;
          background: rgba(255,255,255,0.2);
          color: #fff;
          border: 2px solid rgba(255,255,255,0.6);
          border-radius: 8px;
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-back:hover {
          background: rgba(255,255,255,0.35);
        }

        .hero-icon {
          font-size: 52px;
          margin-bottom: 16px;
          opacity: 0.95;
        }

        .hero-title {
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .detail-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 60px;
        }

        .detail-intro {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          margin-bottom: 48px;
        }

        .detail-image-wrap {
          position: relative;
          flex: 0 0 420px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
        }

        .detail-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .detail-description {
          flex: 1;
          padding-top: 8px;
        }

        .detail-description h2 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .detail-description p {
          font-size: 16px;
          color: #555;
          line-height: 1.75;
        }

        .detail-items-section {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        .items-heading {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        .item-card {
          background: #f9fafb;
          border-radius: 10px;
          padding: 16px;
          transition: box-shadow 0.2s;
        }

        .item-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .item-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .item-card-icon {
          font-size: 18px;
        }

        .item-card-name {
          font-size: 15px;
          font-weight: 600;
          color: #333;
        }

        .item-card-subitems {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .item-card-subitems li {
          font-size: 13px;
          color: #666;
          padding: 3px 0;
        }

        @media (max-width: 768px) {
          .detail-intro {
            flex-direction: column;
          }

          .detail-image-wrap {
            flex: unset;
            width: 100%;
          }

          .btn-back {
            top: 80px;
            left: 16px;
          }

          .hero-title {
            font-size: 26px;
          }

          .hero-icon {
            font-size: 38px;
          }

          .detail-hero {
            padding: 70px 20px 40px;
          }
        }

        @media (max-width: 480px) {
          .items-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </PageTransition>
  );
};

export default ProductDetail;
