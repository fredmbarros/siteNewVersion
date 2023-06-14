import { useState } from "react";

import availableLanguages from "./resources/availableLanguages";

// TODO: make code more DRY by extracting a component that is fed either with languages or views

const ChangeLanguage = ({ language, setLanguage }) => {
  const [showLanguagessBox, setShowLanguagesBox] = useState(false);

  const chooseLanguage = (currentLanguage) => {
    // TODO: add clickOutside function to close the languages box
    if (language === currentLanguage) return;
    setLanguage(currentLanguage);
    // setShowLanguagesBox(false);
  };

  const changeLanguageWorkflow = () => {
    setShowLanguagesBox(!showLanguagessBox);
    // clickOutside function needs to be implemented here
  };

  return (
    <div>
      <button
        onClick={() => changeLanguageWorkflow()}
        type="button"
        name="change-view"
        className="cab-upper-frame-script"
      >
        Change Language
      </button>
      {showLanguagessBox && (
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
