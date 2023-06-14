import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Interface from "./Interface";
import Speaker from "./Speaker";
import { StoreProvider } from "./store/Store";

const App = () => {
  let storedView = localStorage.getItem("view");
  let chosenView = storedView ?? "style-receiver";

  return (
    <StoreProvider>
      <BrowserRouter>
        <div>
          <link rel="stylesheet" href={`./${chosenView}`} />
        </div>
        <div className="whole-page">
          <Interface />
          <Speaker />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
