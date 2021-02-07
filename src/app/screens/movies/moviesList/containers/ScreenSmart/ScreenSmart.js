import React, { Fragment, useEffect, useContext } from "react";
import MoviesListContext from "@src/context/contextMoviesList";

export default function ScreenSmart({ children, navigation }) {
  const {
    navigation: { set },
  } = useContext(MoviesListContext);
  useEffect(() => {
    set(navigation);
  }, [navigation]);
  return <Fragment>{children}</Fragment>;
}
