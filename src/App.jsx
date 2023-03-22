import { createRoot } from "react-dom/client";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./resources/SubSelector";
import VuMeter from "./VuMeter";

const App = () => {
  return (
    <div>
      <div className="receiver">
        <CabinetFrame />
        <div className="cabinet-main">
          <PageSelector />
          <RadioDisplay />
          <VuMeter />
          <VuMeter />
          <SubSelector />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
