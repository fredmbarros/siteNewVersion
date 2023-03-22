import { useState } from "react";

const PageSelector = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleClick = (index) => {
    setSelectedPage(index);
  };

  const pages = ["home", "teaching", "research", "art and music"];

  return (
    <div className="page-selector-container">
      {pages.map((page, index) => (
        <button
          className="pageLink"
          key={index}
          onClick={() => handleClick(index)}
          type="button"
          name="Page Selector"
        >
          <span
            className={`page-select-btn ${
              index === selectedPage && "selected"
            }`}
          ></span>
          {page.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
