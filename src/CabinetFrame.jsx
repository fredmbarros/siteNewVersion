import { useState, useEffect } from "react";

import ChangeLanguage from "./ChangeLanguage";
import ChangeMode from "./ChangeMode";

const CabinetFrame = () => {
  const [mode, setMode] = useState("dark");
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    // função para recarregar a página com o novo modo ou idioma - salvar no localStorage
    console.log(mode, language);
  }, [mode, language]);

  return (
    <div>
      <div className="cabinet-upper-frame">
        <ChangeLanguage language={language} setLanguage={setLanguage} />
        <h1>frederico barros</h1>
        <ChangeMode mode={mode} setMode={setMode} />
      </div>
    </div>
  );
};

export default CabinetFrame;
