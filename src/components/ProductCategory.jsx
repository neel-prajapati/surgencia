import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Reusable ProductCategory component for displaying product categories
 * @param {Object} props
 * @param {string} props.categoryId - Category slug ID for routing
 * @param {string} props.title - Category title
 * @param {string} props.icon - Font Awesome icon class
 * @param {string} props.color - Theme color for the category
 * @param {Array} props.items - Array of items with name and optional subitems
 * @param {string} props.description - Optional category description
 */
const ProductCategory = ({ categoryId, title, icon, color, items, description }) => {
  const navigate = useNavigate();

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    if (item.id) {
      navigate(`/products/${categoryId}/${item.id}`);
    }
  };

  return (
    <div className="product-category">
      <div
        className="category-header"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, 30)} 100%)`,
        }}
      >
        <span className="category-icon">
          <i className={icon}></i>
        </span>
        <h3 className="category-title">{title}</h3>
      </div>

      {description && (
        <p className="category-description">{description}</p>
      )}

      <ul className="category-items">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="category-item category-item-clickable"
            onClick={(e) => handleItemClick(e, item)}
          >
            <div className="item-content">
              <span className="item-icon" style={{ color }}>
                <i className="fa fa-angle-right"></i>
              </span>
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                {item.subitems && item.subitems.length > 0 && (
                  <ul className="sub-items">
                    {item.subitems.map((subitem, subIdx) => (
                      <li key={subIdx} className="sub-item">
                        <i className="fa fa-angle-right" style={{ color, marginRight: 8 }}></i>
                        {subitem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="item-arrow" style={{ color }}>
                <i className="fa fa-chevron-right"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        .category-item-clickable {
          cursor: pointer;
          transition: background 0.15s;
          border-radius: 6px;
        }
        .category-item-clickable:hover {
          background: rgba(0, 0, 0, 0.04);
        }
        .item-arrow {
          font-size: 11px;
          opacity: 0.5;
          margin-left: auto;
          padding-left: 8px;
          flex-shrink: 0;
        }
        .category-item-clickable:hover .item-arrow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

/**
 * Helper function to lighten/darken a hex color
 */
function adjustColor(color, amount) {
  const clamp = (val) => Math.min(255, Math.max(0, val));

  let hex = color.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }

  const num = parseInt(hex, 16);
  const r = clamp((num >> 16) + amount);
  const g = clamp(((num >> 8) & 0x00FF) + amount);
  const b = clamp((num & 0x0000ff) + amount);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default ProductCategory;
