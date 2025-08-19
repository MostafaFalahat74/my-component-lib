import Spinner from "./components/Spinner";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <>
      <Spinner size="60px" color="red" speed="0.5s" text="در حال بارگذاری..." />
      <Spinner size="30px" color="green" speed="2s" />
    </>

  );
}
export default App
