import React, { createContext, useState } from "react";

const MoviesListContext = createContext();

const MoviesListProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [navigation, setNavigation] = useState(null);
  const from = page * 3;
  const to = (page + 1) * 3;
  const value = {
    page,
    limits: { from, to },
    generatePages: [to - 2, to - 1, to],
    changePage: (page) => setPage(page),
    navigation: { get: navigation, set: (value) => setNavigation(value) },
  };
  return (
    <MoviesListContext.Provider value={value}>
      {children}
    </MoviesListContext.Provider>
  );
};
export { MoviesListProvider };
export default MoviesListContext;
