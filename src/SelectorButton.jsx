const SelectorButton = ({ name, selected, diameter }) => {
  return (
    <div
      className={`selector-btn ${
        name === selected && "selected"
      } selector-btn-${diameter}`}
    >
      <div className={`circle ${name === selected && "circle-selected"}`}></div>
    </div>
  );
};
export default SelectorButton;
