const SelectorButton = ({ name, selected, diameter }) => {
  return (
    <div
      className={`selector-btn ${
        name === selected && "selected"
      } selector-btn-${diameter}`}
    ></div>
  );
};
export default SelectorButton;
