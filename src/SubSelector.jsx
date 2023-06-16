import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import SelectorButton from "./SelectorButton";
import { StoreContext } from "./store/Store";

const SubSelector = () => {
  const navigateTo = useNavigate();

  const {
    view,
    selectedPage,
    setSelectedPage,
    setSelectedSubPage,
    selectedSubPage,
    subPageList,
  } = useContext(StoreContext);

  const subPageSelect = (pageName) => {
    if (pageName === selectedPage) {
      setSelectedPage(pageName);
      setSelectedSubPage(null);
      navigateTo(`/${selectedPage}`);
    } else {
      setSelectedSubPage(pageName);
      navigateTo(`/${pageName}`);
    }
  };

  if (subPageList) {
    return (
      <div className="sub-page-selector-container">
        {view !== "receiver" && (
          <button
            className="sub-page-select"
            onClick={() => subPageSelect(selectedPage)}
            type="button"
            name="Sub-page Selector"
          >
            <span className="sub-page-title">&nbsp;</span>
          </button>
        )}
        {subPageList.map((subPage, index) => (
          <button
            className="sub-page-select"
            key={index}
            onClick={() => subPageSelect(subPage.pageName)}
            type="button"
            name="Sub-page Selector"
          >
            {view === "receiver" && (
              <SelectorButton
                name={subPage.pageName}
                selected={selectedSubPage}
                diameter="medium"
              />
            )}
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
