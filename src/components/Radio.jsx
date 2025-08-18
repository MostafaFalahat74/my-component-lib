import React from "react";

export const Radio = ({ label, name, value, checked, onChange, disabled }) => {
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
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{
          width: "16px",
          height: "16px",
          accentColor: "#4f46e5", // رنگ انتخاب (مدرن)
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {label}
    </label>
  );
};
