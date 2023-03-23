const SelectorButton = ({ index, selected, diameter }) => {
  return (
    <div
      className={`selector-btn ${
        index === selected && "selected"
      } selector-btn-${diameter}`}
    ></div>
  );
};
export default SelectorButton;
