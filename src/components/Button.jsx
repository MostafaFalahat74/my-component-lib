import React from "react";

export const Button = ({
    children,
    onClick,
    background = "#4f46e5",
    color = "white",
    padding = "8px 16px",
    borderRadius = "8px",
    border = "none",
    cursor = "pointer",
    style = {},
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                background,
                color,
                padding,
                borderRadius,
                border,
                cursor,
                ...style, // امکان override کامل
              }}
        >
            {children}
        </button>
    );
};
