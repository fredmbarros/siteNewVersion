const ChangeLanguage = ({ language, setLanguage }) => {
  const altLang = language === "PT" ? "EN" : "PT";
  return (
    <div>
      <button
        onClick={() => setLanguage(altLang)}
        type="button"
        name="choose-language"
        value={altLang}
        className="cab-upper-frame-script"
      >
        {altLang}
      </button>
    </div>
  );
};

export default ChangeLanguage;
