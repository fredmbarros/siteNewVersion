// import { useEffect } from "react";

import ChangeView from "./ChangeView";
import ChangeLanguage from "./ChangeLanguage";

const CabinetFrame = () => {
  // useEffect(() => {
  //   // function to reload page with new mode or new language - save in localStorage
  //   // console.log(view, language);
  // }, [view, language]);

  return (
    <div>
      <div className="cabinet-upper-frame">
        <ChangeView />
        <h1>frederico barros</h1>
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default CabinetFrame;
