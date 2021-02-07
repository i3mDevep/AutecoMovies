import React, { useContext } from "react";
import { FlatList } from "react-native";
import CarouselMoviesSmart from "../CarouselMoviesSmart";
import MoviesListContext from "@src/context/contextMoviesList";

export default function ListCarouselMovies() {
  const { generatePages } = useContext(MoviesListContext);
  return (
    <FlatList
      data={generatePages}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <CarouselMoviesSmart page={item} />}
    />
  );
}
