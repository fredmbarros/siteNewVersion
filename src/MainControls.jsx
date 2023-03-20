import { ReactComponent as SelectorKnob } from "./resources/selector-knob.svg";

const MainControls = () => {
  const turnKnob = () => {
    // index + 1
    // usar a rotação em CSS é uma solução, mas o reflexo na imagem teria que ser outra camada por cima pra ficar fixo
  };

  return (
    <div className="selector-knob-container">
      <button
        onClick={() => turnKnob()}
        className="selector-knob"
        type="button"
        name="selector-knob"
      >
        <SelectorKnob />
        {/* <img src="../resources/selector-knob.svg" alt="selector-knob" /> */}
      </button>
      <div className="selector-knob-indicator"></div>
    </div>
  );
};

export default MainControls;
