import { useState } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Interface from "./Interface";
import Speaker from "./Speaker";
import availableViews from "./resources/availableViews";

const App = () => {
  let storedView = localStorage.getItem("view");
  let chosenView = storedView ?? "style-receiver";

  const [view, setView] = useState(availableViews[0]);
  const [language, setLanguage] = useState("EN");

  return (
    <BrowserRouter>
      <div>
        <link rel="stylesheet" href={`./${chosenView}`} />
      </div>
      <div className="whole-page">
        <Interface
          view={view}
          setView={setView}
          language={language}
          setLanguage={setLanguage}
        />
        <Speaker />
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
