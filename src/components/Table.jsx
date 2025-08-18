import React from "react";

export const Table = ({ columns, data }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* هدر جدول */}
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {columns.map((col, idx) => (
              <th
                key={idx}
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #e5e7eb",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* بدنه جدول */}
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              style={{
                borderBottom: "1px solid #f3f4f6",
                background: rowIdx % 2 === 0 ? "#fff" : "#f9fafb",
              }}
            >
              {columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    padding: "10px 12px",
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
