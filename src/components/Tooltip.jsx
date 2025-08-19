import React, { useState } from "react";

export const Tooltip = ({ text, children, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const getPositionStyle = () => {
    switch (position) {
      case "top":
        return {
          bottom: "120%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "bottom":
        return {
          top: "120%",
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "left":
        return {
          right: "120%",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "right":
        return {
          left: "120%",
          top: "50%",
          transform: "translateY(-50%)",
        };
      default:
        return {};
    }
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          style={{
            position: "absolute",
            background: "black",
            color: "white",
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            zIndex: 100,
            ...getPositionStyle(),
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
