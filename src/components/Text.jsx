import React from "react";

export const Text = ({ children, variant = "body", color = "#111827", align = "left", bold = false }) => {
  const styles = {
    base: {
      margin: 0,
      color,
      textAlign: align,
      fontWeight: bold ? "600" : "400",
    },
    variants: {
      h1: { fontSize: "32px", lineHeight: "40px", fontWeight: "700" },
      h2: { fontSize: "24px", lineHeight: "32px", fontWeight: "600" },
      h3: { fontSize: "20px", lineHeight: "28px", fontWeight: "600" },
      body: { fontSize: "16px", lineHeight: "24px" },
      small: { fontSize: "14px", lineHeight: "20px" },
      caption: { fontSize: "12px", lineHeight: "16px", color: "#6b7280" },
    },
  };

  return (
    <p style={{ ...styles.base, ...styles.variants[variant] }}>
      {children}
    </p>
  );
};
