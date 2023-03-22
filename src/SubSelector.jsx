import { useState } from "react";

import SelectorButton from "./SelectorButton";

const SubSelector = ({ arr }) => {
  const [selectedSubPage, setSelectedSubPage] = useState(0);

  if (arr) {
    return (
      <div>
        {arr.map((subPage, index) => (
          <button
            className="subPageSelect"
            key={index}
            onClick={() => setSelectedSubPage(index)}
            type="button"
            name="Sub-page Selector"
          >
            <SelectorButton
              index={index}
              selected={selectedSubPage}
              diameter="large"
            />
            <span>{subPage}</span>
          </button>
        ))}
      </div>
    );
  } else {
    return <p>No arr</p>;
  }
};

export default SubSelector;
