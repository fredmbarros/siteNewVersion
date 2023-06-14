import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";
import pagesObj from "./resources/pagesObj";

const Interface = () => {
  const navigateTo = useNavigate();
  const pageList = Object.keys(pagesObj);
  let sessionSelectedPage =
    sessionStorage.getItem("currentPage") ?? pageList[0];
  sessionSelectedPage ?? navigateTo("/home");

  const [selectedPage, setSelectedPage] = useState(sessionSelectedPage);
  const [subPageList, setSubPageList] = useState(pagesObj[selectedPage]);
  const [selectedSubPage, setSelectedSubPage] = useState(null);

  useEffect(() => {
    setSubPageList(pagesObj[selectedPage]);
    sessionStorage.setItem("currentPage", selectedPage);
  }, [selectedPage, subPageList]);

  return (
    <div className="receiver border-gradient">
      <CabinetFrame />
      <div className="receiver-main border-gradient">
        <PageSelector
          setSelectedPage={setSelectedPage}
          setSelectedSubPage={setSelectedSubPage}
          pageList={pageList}
          navigateTo={navigateTo}
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
        navigateTo={navigateTo}
      />
    </div>
  );
};

export default Interface;
