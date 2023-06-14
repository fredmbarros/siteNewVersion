import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [view, setView] = useState("Almost flat");
  const [language, setLanguage] = useState("English");
  const [selectedPage, setSelectedPage] = useState("home");
  const [selectedSubPage, setSelectedSubPage] = useState("");

  const store = {
    view,
    setView,
    language,
    setLanguage,
    selectedPage,
    setSelectedPage,
    selectedSubPage,
    setSelectedSubPage,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
