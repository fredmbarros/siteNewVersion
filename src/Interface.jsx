import { useState, useEffect } from "react";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";
import pagesObj from "./resources/pagesObj";

const Interface = () => {
  const pageList = Object.keys(pagesObj);
  const [selectedPage, setSelectedPage] = useState(pageList[0]);
  const [subPageList, setSubPageList] = useState(pagesObj[selectedPage]);
  const [selectedSubPage, setSelectedSubPage] = useState("");

  // const [selectedPage, setSelectedPage] = useState(null);
  // const [subPageList, setSubPageList] = useState(null);
  // const [selectedSubPage, setSelectedSubPage] = useState(null);

  useEffect(() => {
    // when you change the selected page, it could store what was the last selected subPage for each page and get back to it - I'll leave this for when everything else is done.
    setSubPageList(pagesObj[selectedPage]);
    setSelectedSubPage(subPageList[0].pageName);
  }, [selectedPage, subPageList]);

  // useEffect(() => {
  //   console.log(selectedSubPage);
  // }, [selectedSubPage]);

  return (
    <div className="receiver border-gradient">
      <CabinetFrame />
      <div className="receiver-main border-gradient">
        <PageSelector
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          pageList={pageList}
        />
        <div className="receiver-displays">
          <RadioDisplay />
          <VuMeter />
          <VuMeter />
        </div>
      </div>
      <SubSelector
        subPageList={subPageList}
        selectedSubPage={selectedSubPage}
        setSelectedSubPage={setSelectedSubPage}
      />
    </div>
  );
};

export default Interface;
