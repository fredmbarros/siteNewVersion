import { useState } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Interface from "./Interface";
import Speaker from "./Speaker";
import availableViews from "./resources/availableViews";
import { StoreProvider } from "./store/Store";

const App = () => {
  let storedView = localStorage.getItem("view");
  let chosenView = storedView ?? "style-receiver";

  const [view, setView] = useState(availableViews[0]);
  const [language, setLanguage] = useState("English");

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
