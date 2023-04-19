import SelectorButton from "./SelectorButton";

const PageSelector = ({ selectedPage, setSelectedPage, pageList }) => {
  return (
    <div className="page-selector-container">
      {pageList.map((page, index) => (
        <button
          className="page-link"
          key={index}
          onClick={() => setSelectedPage(page)}
          type="button"
          name="Page Selector"
        >
          <SelectorButton
            name={page}
            selected={selectedPage}
            diameter="medium"
          />
          <div className="page-link-text">{page}</div>
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
