import SelectorButton from "./SelectorButton";

const PageSelector = ({
  selectedPage,
  setSelectedPage,
  pageList,
  navigateTo,
}) => {
  const pageSelect = (page) => {
    setSelectedPage(page);
    console.log(page);
    navigateTo(`/${page}`);
  };

  return (
    <div className="page-selector-container">
      {pageList.map((page, index) => (
        <button
          className="page-link"
          key={index}
          onClick={() => pageSelect(page)}
          type="button"
          name="Page Selector"
        >
          <SelectorButton
            name={page}
            selected={selectedPage}
            diameter="small"
          />
          <div className="page-link-text">{page}</div>
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
