import { useState, useEffect } from "react";

import ChangeView from "./ChangeView";
import ChangeLanguage from "./ChangeLanguage";
import availableViews from "./resources/availableViews";

const CabinetFrame = () => {
  const [view, setView] = useState(availableViews[0]);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    // function to reload page with new mode or new language - save in localStorage
    // console.log(view, language);
  }, [view, language]);

  return (
    <div>
      <div className="cabinet-upper-frame">
        <ChangeView view={view} setView={setView} />
        <h1>frederico barros</h1>
        <ChangeLanguage language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
};

export default CabinetFrame;
