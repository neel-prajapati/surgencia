import React from "react";

const WatermarkedImage = ({ src, alt, className, style }) => {
  return (
    <div className="watermarked-image-wrap" style={{ position: "relative", ...style }}>
      <img src={src} alt={alt} className={className} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
      <span className="watermark-label">surgencia</span>

      <style>{`
        .watermarked-image-wrap {
          overflow: hidden;
        }
        .watermark-label {
          position: absolute;
          bottom: 10px;
          right: 12px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
          background: rgba(25, 118, 210, 0.75);
          padding: 3px 9px;
          border-radius: 4px;
          pointer-events: none;
          user-select: none;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }
      `}</style>
    </div>
  );
};

export default WatermarkedImage;
