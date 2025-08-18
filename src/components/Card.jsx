import React from "react";

export const Card = ({
    title,
    children,
    border= "1px solid #e5e7eb",
    borderRadius= "12px",
    padding= "16px",
    boxShadow= "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth= "300px",
    background= "white",
    style = {},
}) => {
    return (
        <div
            style={{
                border,
                borderRadius,
                padding,
                boxShadow,
                maxWidth,
                background,
                ... style,
            }}
        >
            {title && <h3 style={{ marginBottom: "12px" }}>{title}</h3>}
            <div>{children}</div>
        </div>
    );
};