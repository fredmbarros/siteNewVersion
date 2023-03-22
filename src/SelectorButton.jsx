const SelectorButton = ({ index, selected, diameter }) => {
  return (
    <span
      className={`selector-btn ${
        index === selected && "selected"
      } selector-btn-${diameter}`}
    ></span>
  );
};
export default SelectorButton;
