import SelectorButton from "./SelectorButton";

const SubSelector = ({ subPageList, selectedSubPage, setSelectedSubPage }) => {
  if (subPageList) {
    return (
      <div className="sub-page-selector-container">
        {subPageList.map((subPage, index) => (
          <button
            className="sub-page-select"
            key={index}
            onClick={() => setSelectedSubPage(subPage.pageName)}
            type="button"
            name="Sub-page Selector"
          >
            <SelectorButton
              name={subPage.pageName}
              selected={selectedSubPage}
              diameter="large"
            />
            <span className="sub-page-title">{subPage.displayName}</span>
          </button>
        ))}
      </div>
    );
  } else {
    return <p>No data</p>;
  }
};

export default SubSelector;
