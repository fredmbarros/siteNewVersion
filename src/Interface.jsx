import { useContext, useEffect } from "react";

import { StoreContext } from "./store/Store";

import pagesObj from "./resources/pagesObj";
import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";

const Interface = () => {
  const { view, setSubPageList, selectedPage } = useContext(StoreContext);

  useEffect(() => {
    setSubPageList(pagesObj[selectedPage]);
    sessionStorage.setItem("currentPage", selectedPage);
  }, [selectedPage, setSubPageList]);

  return (
    <div
      className={`receiver-cab ${view === "receiver" ? "border-gradient" : ""}`}
    >
      <CabinetFrame />
      <div
        className={`interface-main ${
          view === "receiver" ? "border-gradient" : ""
        }`}
      >
        <PageSelector />
        {view === "receiver" && (
          <div className="receiver-displays">
            <RadioDisplay />
            <VuMeter />
            <VuMeter />
          </div>
        )}
      </div>
      <SubSelector />
    </div>
  );
};

export default Interface;
