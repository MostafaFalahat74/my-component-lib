import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        نمایش مودال
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="سلام!">
        <p>این یک مودال ساده است 🎉</p>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            marginTop: "12px",
            padding: "8px 16px",
            border: "none",
            background: "#ef4444",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          بستن
        </button>
      </Modal>
    </div>
  );
}


export default App
