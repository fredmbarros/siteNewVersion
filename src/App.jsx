import { createRoot } from "react-dom/client";

import Cabinet from "./Cabinet";
import MainControls from "./MainControls";

const App = () => {
  return (
    <div>
      <Cabinet />
      <MainControls />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
