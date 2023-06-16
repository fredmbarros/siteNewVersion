import { useContext } from "react";

import { StoreContext } from "./store/Store";
import ChangeView from "./ChangeView";
import ChangeLanguage from "./ChangeLanguage";

const CabinetFrame = () => {
  // useEffect(() => {
  //   // function to reload page with new mode or new language - save in localStorage
  //   // console.log(view, language);
  // }, [view, language]);

  const { view } = useContext(StoreContext);

  if (view === "receiver") {
    return (
      <div>
        <div className="cabinet-upper-frame">
          <ChangeView />
          <h1>frederico barros</h1>
          <ChangeLanguage />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cabinet-upper-frame">
        <h1 className="site-name">frederico barros</h1>
        <div className="change-view-lang-container">
          <ChangeView />
          <span>/</span>
          <ChangeLanguage />
        </div>
      </div>
    );
  }
};

export default CabinetFrame;
