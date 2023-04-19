import { useState, useEffect } from "react";

import ChangeView from "./ChangeView";
import ChangeLanguage from "./ChangeLanguage";
import availableViews from "./resources/availableViews";

const CabinetFrame = () => {
  const [view, setView] = useState(availableViews[0]);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    // função para recarregar a página com o novo modo ou idioma - salvar no localStorage
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
