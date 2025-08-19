import React from "react";

const Spinner = ({ size = "40px", color = "#3498db", speed = "1s", text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: `spin ${speed} linear infinite`,
        }}
      ></div>
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );
};

// تعریف انیمیشن به صورت global
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

export default Spinner;
