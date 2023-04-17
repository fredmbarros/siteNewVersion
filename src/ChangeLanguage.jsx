import { useState } from "react";

const ChangeLanguage = ({ language, setLanguage }) => {
  const [showLanguagesBox, setShowLanguagesBox] = useState(false);

  const availableLanguages = ["English", "Português"];

  const chooseLanguage = (lang) => {
    // TODO: add clickOutside function to close the languagesBox; find way of avoiding that the languagesBox keeps floating if user opens it and then scrolls (best way is possibly that the clickOutside event also responds to scrolling, closing the box in this case too). That said, it's expected that when the user clicks on the new language it immediately starts reloading the page, not making it necessary to close the languagesBox
    if (language === lang) return;
    setLanguage(lang);
    // setShowLanguagesBox(false);
  };

  const changeLanguageWorkflow = () => {
    setShowLanguagesBox(!showLanguagesBox);
    // clickOutside function needs to be implemented here
  };

  return (
    <div>
      <button
        onClick={() => changeLanguageWorkflow()}
        type="button"
        name="change-language"
        className="cab-upper-frame-script"
      >
        Change language
      </button>
      {showLanguagesBox && (
        <div className="languages-box">
          <button
            onClick={() => setShowLanguagesBox(false)}
            type="button"
            name="close"
            className="language-btn"
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
              className={`language-btn ${
                lang === language && "selected-language-btn"
              }`}
            >
              {/* {lang === language ? lang.toUpperCase() : lang} */}
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
