import React from "react";
import { motion } from "framer-motion";
import ProductCategory from "../components/ProductCategory";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";

/**
 * Product categories data with icons and colors
 */
const productCategories = [
  {
    id: "disposable-gloves",
    title: "Disposable Gloves",
    icon: "fa fa-certificate",
    color: "#1976d2",
    description: "High-quality disposable gloves for medical and examination purposes.",
    items: [
      {
        name: "Surgical Gloves",
        icon: "fa fa-medkit",
        subitems: ["Powdered", "Powder-Free", "Available in multiple sizes (S, M, L, XL)"],
      },
      { name: "Nitrile Examination Gloves", icon: "fa fa-check-circle" },
      { name: "Latex Gloves", icon: "fa fa-dot-circle-o" },
      { name: "Vinyl Gloves", icon: "fa fa-circle-thin" },
      { name: "Plastic Gloves", icon: "fa fa-check-square-o" },
    ],
  },
 
  {
    id: "drape",
    title: "Drape (MD Class-2)",
    icon: "fa fa-square",
    color: "#6a1b9a",
    description: "Medical device Class-2 drapes for surgical procedures.",
    items: [
      { name: "Surgical Drapes", icon: "fa fa-th-large" },
      { name: "Procedure Drapes", icon: "fa fa-th" },
      { name: "Sterile Barrier Systems", icon: "fa fa-shield" },
    ],
  },
  {
    id: "surgical-disposable",
    title: "Surgical Disposable Products (Class-2)",
    icon: "fa fa-medkit",
    color: "#388e3c",
    description: "Essential surgical disposable products meeting Class-2 medical device standards.",
    items: [
      { name: "IV Cannula", icon: "fa fa-tint" },
      { name: "IV Infusion Set", icon: "fa fa-eyedropper" },
      { name: "Nebulizer Mask Kit", icon: "fa fa-cloud" },
      { name: "O2 Kit", icon: "fa fa-circle-o" },
      { name: "Nasal O2 Cannula", icon: "fa fa-minus" },
      { name: "Urine Bag", icon: "fa fa-archive" },
      { name: "Urine Container", icon: "fa fa-flask" },
    ],
  },
   {
    id: "ppe",
    title: "Personal Protective Equipment (PPE)",
    icon: "fa fa-shield",
    color: "#c62828",
    description: "Complete range of personal protective equipment for healthcare professionals.",
    items: [
      { name: "N95 Mask", icon: "fa fa-filter" },
      { name: "Face Shield", icon: "fa fa-bookmark-o" },
      { name: "Medical Apron", icon: "fa fa-user-md" },
      { name: "Disposable Lab Coat", icon: "fa fa-user" },
      { name: "Disposable Surgical Gown", icon: "fa fa-user-plus" },
      { name: "Shoe Cover (LD / Non-Woven)", icon: "fa fa-level-down" },
      { name: "Surgeon Cap (Disposable)", icon: "fa fa-graduation-cap" },
      { name: "Disposable Bouffant Cap", icon: "fa fa-circle-o" },
      { name: "Face Mask", icon: "fa fa-user-secret" },
      { name: "Beard Mask", icon: "fa fa-male" },
      { name: "Hand Sleeve", icon: "fa fa-arrows-v" },
    ],
  },
  {
    id: "surgical-dressing",
    title: "Surgical Dressing Products",
    icon: "fa fa-plus-square",
    color: "#f57c00",
    description: "Wound care and surgical dressing solutions.",
    items: [
      { name: "Sterile Gauze Pads", icon: "fa fa-square-o" },
      { name: "Adhesive Bandages", icon: "fa fa-bookmark" },
      { name: "Surgical Tape", icon: "fa fa-minus-square" },
      { name: "Cotton Rolls", icon: "fa fa-circle" },
      { name: "Wound Dressings", icon: "fa fa-plus-square-o" },
    ],
  },
  {
    id: "bio-waste-bag",
    title: "Bio Waste Bag",
    icon: "fa fa-trash",
    color: "#455a64",
    description: "Safe and compliant bio-hazardous waste disposal bags.",
    items: [
      { name: "Red Bio-Hazard Bags", icon: "fa fa-exclamation-triangle" },
      { name: "Yellow Infectious Waste Bags", icon: "fa fa-warning" },
      { name: "Blue Pharmaceutical Waste Bags", icon: "fa fa-cube" },
      { name: "Black General Waste Bags", icon: "fa fa-trash-o" },
    ],
  },
];

const ProductsAll = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <PageTransition>
      <section id="products-all" className="products-all-page">
        <div className="container">
          <AnimatedSection animation="fadeUp">
            <div className="section-header">
              <h1 className="page-title">Our Products</h1>
              <p className="page-subtitle">
                Comprehensive range of medical supplies and surgical equipment for
                healthcare professionals worldwide.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {productCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <ProductCategory
                  title={category.title}
                  icon={category.icon}
                  color={category.color}
                  items={category.items}
                  description={category.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <style>{`
        .products-all-page {
          padding: 100px 0 60px;
          background: linear-gradient(180deg, #f5f7fa 0%, #e8ecf1 100%);
          min-height: 100vh;
        }

        .products-all-page .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .page-title {
          font-size: 42px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #6372ff 0%, #5ca9fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          align-items: start;
        }

        /* Product Category Styles */
        .product-category {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        .category-header {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          color: #fff;
        }

        .category-icon {
          font-size: 24px;
          margin-right: 12px;
          opacity: 0.9;
        }

        .category-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .category-description {
          padding: 12px 20px 8px;
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .category-items {
          list-style: none;
          padding: 12px 20px;
          margin: 0;
          flex: 1;
        }

        .category-item {
          padding: 10px 0;
          border-bottom: 1px solid #f5f5f5;
        }

        .category-item:last-child {
          border-bottom: none;
        }

        .item-content {
          display: flex;
          align-items: flex-start;
        }

        .item-icon {
          font-size: 14px;
          margin-right: 10px;
          margin-top: 2px;
          opacity: 0.8;
        }

        .item-details {
          flex: 1;
        }

        .item-name {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        .sub-items {
          list-style: none;
          padding: 6px 0 0 0;
          margin: 0;
        }

        .sub-item {
          font-size: 12px;
          color: #666;
          padding: 4px 0;
          display: flex;
          align-items: center;
        }

        /* Responsive Styles */
        @media screen and (max-width: 768px) {
          .products-all-page {
            padding: 80px 0 40px;
          }

          .page-title {
            font-size: 32px;
          }

          .page-subtitle {
            font-size: 16px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media screen and (max-width: 480px) {
          .products-all-page .container {
            padding: 0 15px;
          }

          .page-title {
            font-size: 28px;
          }

          .category-title {
            font-size: 16px;
          }

          .item-name {
            font-size: 14px;
          }
        }
      `}</style>
      </section>
    </PageTransition>
  );
};

export default ProductsAll;
