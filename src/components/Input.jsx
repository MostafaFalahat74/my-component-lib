import React from "react";

export const Input = ({ label, value, onChange, placeholder, type = "text" }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "12px" }}>
      {label && (
        <label style={{ marginBottom: "6px", fontSize: "14px", color: "#374151" }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "8px 12px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "14px",
          outline: "none",
        }}
      />
    </div>
  );
};
