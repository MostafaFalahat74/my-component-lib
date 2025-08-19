import { Tooltip } from "./components/Tooltip";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <>
      <Tooltip text="بالا هستم!" position="top">
        <button>Hover top</button>
      </Tooltip>

      <Tooltip text="پایین هستم!" position="bottom">
        <button>Hover bottom</button>
      </Tooltip>

      <Tooltip text="چپ هستم!" position="left">
        <button>Hover left</button>
      </Tooltip>

      <Tooltip text="راست هستم!" position="right">
        <button>Hover right</button>
      </Tooltip>

    </>

  );
}
export default App
