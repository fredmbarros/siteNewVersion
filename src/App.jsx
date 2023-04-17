import { createRoot } from "react-dom/client";

import Interface from "./Interface";
import Speaker from "./Speaker";

const App = () => {
  return (
    <div className="whole-page">
      <Interface />
      <Speaker />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
