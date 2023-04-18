import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Interface from "./Interface";
import Speaker from "./Speaker";

const App = () => {
  return (
    <BrowserRouter>
      <div className="whole-page">
        <Interface />
        <Speaker />
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
