import { useState, useEffect } from "react";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";
import subPageList from "./resources/subPageList";

const Interface = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [subPagesArr, setSubPagesArr] = useState([]);
  const [selectedSubPage, setSelectedSubPage] = useState(0);

  useEffect(() => {
    // when you change the selected page, it always starts with the index number of the last selected subPage. Perhaps it should start every page randomly choosing which subPage, or else always start with 0 (temporarily that's the solution by setting selectedSubPage to 0 here in the useEffect). Better still, it could store what was the last selected subPage for each page and get back to it - I'll leave this for when everything else is done.
    setSubPagesArr(subPageList[selectedPage]);
    setSelectedSubPage(0);
  }, [selectedPage]);

  return (
    <div className="receiver border-gradient">
      <CabinetFrame />
      <div className="receiver-main border-gradient">
        <PageSelector
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="receiver-displays">
          <RadioDisplay />
          <VuMeter />
          <VuMeter />
        </div>
      </div>
      <SubSelector
        arr={subPagesArr}
        selectedSubPage={selectedSubPage}
        setSelectedSubPage={setSelectedSubPage}
      />
    </div>
  );
};

export default Interface;
