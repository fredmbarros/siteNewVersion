import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import SelectorButton from "./SelectorButton";
import { StoreContext } from "./store/Store";

const SubSelector = () => {
  const navigateTo = useNavigate();

  const { setSelectedSubPage, subPageList, selectedSubPage } =
    useContext(StoreContext);

  const subPageSelect = ({ pageName }) => {
    setSelectedSubPage(pageName);
    navigateTo(`/${pageName}`);
  };

  if (subPageList) {
    return (
      <div className="sub-page-selector-container">
        {subPageList.map((subPage, index) => (
          <button
            className="sub-page-select"
            key={index}
            onClick={() => subPageSelect(subPage)}
            type="button"
            name="Sub-page Selector"
          >
            <SelectorButton
              name={subPage.pageName}
              selected={selectedSubPage}
              diameter="medium"
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
