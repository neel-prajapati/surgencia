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

const ProductItemDetail = () => {
  const { categoryId, itemId } = useParams();
  const navigate = useNavigate();

  const category = productCategories.find((c) => c.id === categoryId);
  const item = category?.items?.find((i) => i.id === itemId);

  if (!category || !item) {
    return (
      <PageTransition>
        <section className="product-item-detail-page">
          <div className="container" style={{ paddingTop: 120, textAlign: "center" }}>
            <h2>Product not found</h2>
            <button className="btn-back-item" onClick={() => navigate("/all-products")}>
              <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>Back to Products
            </button>
          </div>
        </section>
      </PageTransition>
    );
  }

  const { color, image: categoryImage, title: categoryTitle, icon: categoryIcon } = category;
  const image = item.image || categoryImage;

  return (
    <PageTransition>
      <section className="product-item-detail-page">
        {/* Hero */}
        <div
          className="item-detail-hero"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 40)} 100%)`,
          }}
        >
          <button
            className="btn-back-item"
            onClick={() => navigate("/all-products")}
          >
            <i className="fa fa-arrow-left" style={{ marginRight: 8 }}></i>
            Back to Products Catalogue
          </button>

          <motion.div
            className="item-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="item-hero-icon">
              <i className={item.icon || categoryIcon}></i>
            </div>
            <p className="item-hero-category">
              <i className={categoryIcon} style={{ marginRight: 6 }}></i>
              {categoryTitle}
            </p>
            <h1 className="item-hero-title">{item.name}</h1>
          </motion.div>
        </div>

        {/* Body */}
        <div className="container item-detail-body">
          <motion.div
            className="item-detail-intro"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="item-detail-image-wrap">
              <WatermarkedImage src={image} alt={item.name} className="item-detail-image" />
              <div
                className="item-image-overlay"
                style={{
                  background: `linear-gradient(135deg, ${color}33 0%, ${adjustColor(color, 40)}22 100%)`,
                }}
              />
            </div>
            <div className="item-detail-description">
              <h2 style={{ color }}>About this Product</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="item-cta-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="item-cta-card"
              style={{ borderLeft: `4px solid ${color}` }}
            >
              <h3 style={{ color }}>Interested in this product?</h3>
              <p>
                Contact our team for specifications, bulk pricing, and availability
                details for <strong>{item.name}</strong>.
              </p>
              <button
                className="item-cta-btn"
                style={{ background: color, borderColor: color }}
                onClick={() => navigate("/contact")}
              >
                <i className="fa fa-envelope" style={{ marginRight: 8 }}></i>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .product-item-detail-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f5f7fa 0%, #e8ecf1 100%);
        }

        .item-detail-hero {
          position: relative;
          padding: 80px 40px 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          min-height: 280px;
        }

        .btn-back-item {
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

        .btn-back-item:hover {
          background: rgba(255,255,255,0.35);
        }

        .item-hero-icon {
          font-size: 48px;
          margin-bottom: 10px;
          opacity: 0.9;
        }

        .item-hero-category {
          font-size: 14px;
          font-weight: 500;
          opacity: 0.85;
          margin: 0 0 8px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .item-hero-title {
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .item-detail-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 60px;
        }

        .item-detail-intro {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          margin-bottom: 36px;
        }

        .item-detail-image-wrap {
          position: relative;
          flex: 0 0 420px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
        }

        .item-detail-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .item-image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .item-detail-description {
          flex: 1;
          padding-top: 8px;
        }

        .item-detail-description h2 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .item-detail-description p {
          font-size: 16px;
          color: #555;
          line-height: 1.75;
        }

        .item-cta-section {
          margin-top: 8px;
        }

        .item-cta-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        .item-cta-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .item-cta-card p {
          font-size: 15px;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .item-cta-btn {
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 24px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .item-cta-btn:hover {
          opacity: 0.88;
        }

        @media (max-width: 768px) {
          .item-detail-intro {
            flex-direction: column;
          }

          .item-detail-image-wrap {
            flex: unset;
            width: 100%;
          }

          .btn-back-item {
            top: 80px;
            left: 16px;
          }

          .item-hero-title {
            font-size: 26px;
          }

          .item-hero-icon {
            font-size: 36px;
          }

          .item-detail-hero {
            padding: 70px 20px 40px;
          }

          .item-cta-card {
            padding: 20px;
          }
        }
      `}</style>
    </PageTransition>
  );
};

export default ProductItemDetail;
