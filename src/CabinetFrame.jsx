import { useEffect } from "react";

import ChangeView from "./ChangeView";
import ChangeLanguage from "./ChangeLanguage";

const CabinetFrame = ({ view, setView, language, setLanguage }) => {
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
