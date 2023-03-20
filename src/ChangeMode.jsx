const ChangeMode = ({ mode, setMode }) => {
  const modes = ["dark", "light"];
  let altMode = modes.filter((el) => el !== mode).toString();

  return (
    <div>
      <button
        onClick={() => setMode(altMode)}
        type="button"
        name="choose-mode"
        value={altMode}
      >
        Switch to {altMode} mode
      </button>
    </div>
  );
};

export default ChangeMode;
