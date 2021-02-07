import React, { useContext } from "react";
import { DataTable } from "react-native-paper";
import MoviesListContext from "@src/context/contextMoviesList";

const Pagination = () => {
  const {
    limits: { from, to },
    page,
    changePage,
  } = useContext(MoviesListContext);
  return (
    <DataTable.Pagination
      page={page}
      numberOfPages={Math.floor(500, 3)}
      onPageChange={changePage}
      label={`${from + 1}-${to} of ${500}`}
    />
  );
};
export default Pagination;
