import { Radio } from "./components/Radio";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h3>جنسیت:</h3>

      <Radio
        label="مرد"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <Radio
        label="زن"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <Radio
        label="سایر"
        name="gender"
        value="other"
        checked={gender === "other"}
        onChange={(e) => setGender(e.target.value)}
      />

      <p style={{ marginTop: "12px" }}>
        انتخاب شما: {gender ? gender : "هیچکدام"}
      </p>
    </div>
  );
}
export default App
