import React from "react";

export const Checkbox = ({ label, checked, onChange, disabled }) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontSize: "14px",
        color: "#374151",
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{
          width: "16px",
          height: "16px",
          accentColor: "#4f46e5", // رنگ تیک (فقط تو مرورگرهای مدرن)
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {label}
    </label>
  );
};
