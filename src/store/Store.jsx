import React, { createContext, useState, useEffect } from "react";

import pagesObj from "../resources/pagesObj";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [view, setView] = useState(null);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    let storedView = localStorage.getItem("view");
    setView(storedView ?? "almost-flat");
  }, []);

  // Most likely this is where the problem is: it looks like there's too much things in sequence relying one on the other in sequence - though it's not async, as far as I know...
  const pageList = Object.keys(pagesObj);
  let sessionSelectedPage =
    sessionStorage.getItem("currentPage") ?? pageList[0];

  const [selectedPage, setSelectedPage] = useState(sessionSelectedPage);
  const [subPageList, setSubPageList] = useState(pagesObj[selectedPage]);
  const [selectedSubPage, setSelectedSubPage] = useState(null);

  const store = {
    view,
    setView,
    language,
    setLanguage,
    pageList,
    selectedPage,
    setSelectedPage,
    subPageList,
    setSubPageList,
    selectedSubPage,
    setSelectedSubPage,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
