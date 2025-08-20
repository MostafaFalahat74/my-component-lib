import React, { useState } from "react";

const Dropdown = ({ label = "انتخاب کنید", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  const styles = {
    container: {
      position: "relative",
      display: "inline-block",
      width: "200px",
      fontFamily: "sans-serif",
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "1px solid #aaa",
      background: "#fff",
      cursor: "pointer",
      textAlign: "left",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    menu: {
      position: "absolute",
      top: "105%",
      left: 0,
      right: 0,
      background: "white",
      border: "1px solid #aaa",
      borderRadius: "5px",
      margin: 0,
      padding: "5px 0",
      listStyle: "none",
      maxHeight: "200px",
      overflowY: "auto",
      zIndex: 1000,
    },
    item: {
      padding: "10px",
      cursor: "pointer",
    },
    itemHover: {
      background: "#eee",
    },
    arrow: {
      border: "solid black",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "4px",
      marginLeft: "8px",
      transition: "transform 0.2s",
    },
  };

  return (
    <div style={styles.container}>
      {/* دکمه اصلی */}
      <button
        style={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
        onMouseLeave={(e) => (e.target.style.background = "#fff")}
      >
        {selected ? selected.label : label}
        <span
          style={{
            ...styles.arrow,
            transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
          }}
        />
      </button>

      {/* لیست گزینه‌ها */}
      {isOpen && (
        <ul style={styles.menu}>
          {options.map((option, index) => (
            <li
              key={index}
              style={styles.item}
              onMouseEnter={(e) => (e.target.style.background = "#eee")}
              onMouseLeave={(e) => (e.target.style.background = "#fff")}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
