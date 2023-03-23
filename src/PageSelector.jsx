import SelectorButton from "./SelectorButton";

const PageSelector = ({ selectedPage, setSelectedPage }) => {
  const pages = ["home", "teaching", "research", "art"];

  return (
    <div className="page-selector-container">
      {pages.map((page, index) => (
        <button
          className="page-link"
          key={index}
          onClick={() => setSelectedPage(index)}
          type="button"
          name="Page Selector"
        >
          <SelectorButton
            index={index}
            selected={selectedPage}
            diameter="medium"
          />
          {/* {page.toUpperCase()} */}
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
