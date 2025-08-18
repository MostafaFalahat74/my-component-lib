import { Text } from "./components/Text";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <Text variant="h1">عنوان اصلی</Text>
      <Text variant="h2" color="#4f46e5">زیرعنوان</Text>
      <Text variant="body">این یک متن معمولی است.</Text>
      <Text variant="small" bold>متن کوچک بولد شده</Text>
      <Text variant="caption">توضیح (caption)</Text>
    </div>
  );
}
export default App
