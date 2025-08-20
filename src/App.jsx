import React from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const items = [
    { label: "🍎 سیب", value: "apple" },
    { label: "🍌 موز", value: "banana" },
    { label: "🍒 گیلاس", value: "cherry" },
  ];

  const handleSelect = (option) => {
    console.log("انتخاب شد:", option);
  };

  return (
    <div style={{ padding: "50px" }}>
      <Dropdown label="میوه‌ها" options={items} onSelect={handleSelect} />
    </div>
  );
}

export default App;
