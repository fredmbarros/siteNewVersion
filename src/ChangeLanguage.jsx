const ChangeLanguage = ({ language, setLanguage }) => {
  const Languages = ["English", "Português"];
  let altLanguage = Languages.filter((el) => el !== language).toString();

  return (
    <div>
      <button
        onClick={() => setLanguage(altLanguage)}
        type="button"
        name="choose-language"
        value={altLanguage}
        className="cab-upper-frame-script"
      >
        Switch to {altLanguage}
      </button>
    </div>
  );
};

export default ChangeLanguage;
