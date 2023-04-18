import SelectorButton from "./SelectorButton";

const SubSelector = ({ arr, selectedSubPage, setSelectedSubPage }) => {
  if (arr) {
    return (
      <div className="sub-page-selector-container">
        {arr.map((subPage, index) => (
          <button
            className="sub-page-select"
            key={index}
            onClick={() => setSelectedSubPage(subPage)}
            type="button"
            name="Sub-page Selector"
          >
            <SelectorButton
              name={subPage}
              selected={selectedSubPage}
              diameter="large"
            />
            <span className="sub-page-title">{subPage[1]}</span>
          </button>
        ))}
      </div>
    );
  } else {
    return <p>No arr</p>;
  }
};

export default SubSelector;
