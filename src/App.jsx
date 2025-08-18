import { Checkbox } from "./components/CheckBox";
import { useState } from "react";

function App() {
  const [accept, setAccept] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Checkbox
        label="شرایط و قوانین را می‌پذیرم"
        checked={accept}
        onChange={(e) => setAccept(e.target.checked)}
      />

    
    </div>
  );
}
export default App
