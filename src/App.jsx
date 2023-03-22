import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";
import subPageList from "./resources/subPageList";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [subPages, setSubPages] = useState([]);

  useEffect(() => {
    // every time selectedPage changes (by clicking on another button in the PageSelector, useEffect will change the subPages state variable, picking up the array inside the subPageList object that has the same name as the button clicked - still have to check if this will work)

    setSubPages(subPageList[selectedPage]);
  }, [selectedPage]);

  return (
    <div>
      <div className="receiver">
        <CabinetFrame />
        <div className="cabinet-main">
          <PageSelector
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <RadioDisplay />
          <VuMeter />
          <VuMeter />
        </div>
        <SubSelector arr={subPages} />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
