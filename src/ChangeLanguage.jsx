const ChangeLanguage = ({ language, setLanguage }) => {
  const Languages = { EN: "Switch to English", PT: "Mudar para Português" };
  const altLang = Object.keys(Languages)
    .filter((l) => l !== language)
    .toString();
  return (
    <div>
      <button
        onClick={() => setLanguage(altLang)}
        type="button"
        name="choose-language"
        value={altLang}
        className="cab-upper-frame-script"
      >
        {Languages[altLang]}
      </button>
    </div>
  );
};

export default ChangeLanguage;
