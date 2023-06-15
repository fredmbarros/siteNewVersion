import { useContext, useEffect } from "react";

import { StoreContext } from "./store/Store";

import pagesObj from "./resources/pagesObj";
import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";

const Interface = () => {
  const { setSubPageList, selectedPage } = useContext(StoreContext);

  useEffect(() => {
    setSubPageList(pagesObj[selectedPage]);
    sessionStorage.setItem("currentPage", selectedPage);
  }, [selectedPage, setSubPageList]);

  return (
    <div className="receiver-cab border-gradient">
      <CabinetFrame />
      <div className="receiver-main border-gradient">
        <PageSelector />
        <div className="receiver-displays">
          <RadioDisplay />
          <VuMeter />
          <VuMeter />
        </div>
      </div>
      <SubSelector />
    </div>
  );
};

export default Interface;
