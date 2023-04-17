import { useState, useEffect } from "react";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";
import subPageList from "./resources/subPageList";

const Interface = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [subPages, setSubPages] = useState([]);
  const [selectedSubPage, setSelectedSubPage] = useState(0);

  // console.log(selectedPage);

  useEffect(() => {
    // every time selectedPage changes (by clicking on another button in the PageSelector, useEffect will change the subPages state variable, picking up the array inside the subPageList object that has the same name as the button clicked - still have to check if this will work)
    console.log(subPageList);
    setSubPages(subPageList[selectedPage]);
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
        arr={subPages}
        selectedSubPage={selectedSubPage}
        setSelectedSubPage={setSelectedSubPage}
      />
    </div>
  );
};

export default Interface;
