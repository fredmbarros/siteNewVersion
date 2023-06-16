import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "./store/Store";

import SelectorButton from "./SelectorButton";

const PageSelector = () => {
  const navigateTo = useNavigate();

  const { view, setSelectedPage, setSelectedSubPage, pageList, selectedPage } =
    useContext(StoreContext);

  const pageSelect = (page) => {
    setSelectedPage(page);
    setSelectedSubPage(null);
    navigateTo(`/${page}`);
  };

  return (
    <div className={view === "receiver" ? "display-block" : "display-flex"}>
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
