import { useState, useContext } from "react";

import { StoreContext } from "./store/Store";
import availableLanguages from "./resources/availableLanguages";

// TODO: make code more DRY by extracting a component that is fed either with languages or views

const ChangeLanguage = () => {
  const { language, setLanguage } = useContext(StoreContext);
  const [showLanguagesBox, setShowLanguagesBox] = useState(false);

  const chooseLanguage = (currentLanguage) => {
    // TODO: add clickOutside function to close the LanguagesBox
    if (language === currentLanguage) return;
    setLanguage(currentLanguage);
    setShowLanguagesBox(false);
  };

  const changeLanguageWorkflow = () => {
    setShowLanguagesBox(!showLanguagesBox);
    // clickOutside function needs to be implemented here
  };

  return (
    <div className="views-langs-container right">
      <button
        onClick={() => changeLanguageWorkflow()}
        type="button"
        name="change-view"
        className="cab-upper-frame-script"
      >
        Change Language
      </button>
      {showLanguagesBox && (
        <div className="languages-box">
          <button
            onClick={() => setShowLanguagesBox(false)}
            type="button"
            name="close"
            className="view-btn"
          >
            X
          </button>
          {availableLanguages.map((currentLang) => (
            <button
              onClick={() => chooseLanguage(currentLang)}
              key={currentLang}
              type="button"
              name={currentLang}
              value={currentLang}
              className={`view-btn ${
                currentLang === language && "selected-view-btn"
              }`}
            >
              {currentLang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
