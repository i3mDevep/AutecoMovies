import React, { useEffect, useReducer, useContext } from "react";
import CarouselMoviesDumps from "../../components/CarouselMoviesDumps";
import LoadingDump from "../../components/LoadingDump";
import resources from "@src/lib/sdk/resource";
import { apiReducer, initialState } from "@src/lib/utils/helper/apiHelper";
import MoviesListContext from "@src/context/contextMoviesList";

export default function CarouselMovies({ page }) {
  const [movies, dispatch] = useReducer(apiReducer, initialState);
  const {
    navigation: { get },
  } = useContext(MoviesListContext);

  useEffect(() => {
    dispatch({ type: "REQUESTED_API" });
    resources.moviesPopular.list({ page }, (err, data) => {
      if (err) {
        dispatch({ type: "ERROR_API", payload: err });
        throw new Error(err);
      }
      dispatch({ type: "SUCCESS_API", payload: data.results });
    });
  }, [page]);

  if (movies.isLoading) return <LoadingDump />;
  const handleDetailClick = (id) =>
    get.navigate("Details", {
      movieId: id,
    });

  return (
    <CarouselMoviesDumps
      detailClick={handleDetailClick}
      movies={movies.message}
    />
  );
}
