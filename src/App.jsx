import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Interface from "./Interface";
import Content from "./Content";
import { StoreProvider } from "./store/Store";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="whole-page">
          <Interface />
          <Content />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
