import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { StoreContext } from "./store/Store";

import CabinetFrame from "./CabinetFrame";
import PageSelector from "./PageSelector";
import RadioDisplay from "./RadioDisplay";
import SubSelector from "./SubSelector";
import VuMeter from "./VuMeter";

const Interface = () => {
  // const navigateTo = useNavigate();

  const {
    // sessionSelectedPage,
    pagesObj,
    setSubPageList,
    selectedPage,
    subPageList,
  } = useContext(StoreContext);

  // useEffect(() => {
  //   sessionSelectedPage ?? navigateTo("/home");
  // }, []);

  useEffect(() => {
    setSubPageList(pagesObj[selectedPage]);
    sessionStorage.setItem("currentPage", selectedPage);
  }, [selectedPage, subPageList, pagesObj, setSubPageList]);

  return (
    <div className="receiver border-gradient">
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
