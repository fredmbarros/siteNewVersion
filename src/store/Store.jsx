import React, { createContext, useState } from "react";

import pagesObj from "../resources/pagesObj";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [view, setView] = useState("Almost flat");
  const [language, setLanguage] = useState("English");

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
    pagesObj,
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
