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

  return (
    <div>
      <div className="cabinet-upper-frame">
        {view === "receiver" && <ChangeView />}
        <h1>frederico barros</h1>
        {view !== "receiver" && <ChangeView />}
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default CabinetFrame;
