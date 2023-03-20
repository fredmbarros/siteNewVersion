import { useState } from "react";

const ChangeLanguage = ({ language, setLanguage }) => {
  const [showChangeLanguageBox, setShowLanguageMenu] = useState(false);

  const availableLanguages = ["English", "Português"];

  const chooseLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowLanguageMenu(true)}
        type="button"
        name="change-language"
      >
        Change language
      </button>
      {showChangeLanguageBox && (
        <div className="languageBox">
          <button
            onClick={() => setShowLanguageMenu(false)}
            type="button"
            name="close"
          >
            X
          </button>
          {availableLanguages.map((lang) => (
            <button
              onClick={() => chooseLanguage(lang)}
              key={lang}
              type="button"
              name={lang}
              value={lang}
            >
              {lang === language ? lang.toUpperCase() : lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
