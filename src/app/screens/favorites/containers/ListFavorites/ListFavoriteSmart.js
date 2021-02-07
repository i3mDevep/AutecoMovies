import React from "react";
import { FlatList } from "react-native";
import useStateWithPromise from "@src/app/hooks/useStateWithPromise";
import ItemFavorite from "../../componets/ItemFavorite";

import { getFavorites } from "@src/lib/asynStorage";

export default function ListFavoriteSmart({ navigation }) {
  const [favorites] = useStateWithPromise(
    getFavorites(),
    null
  );

  let res = [];
  for (var movieId in favorites) {
    res.push({ movieId, ...favorites[movieId] });
  }

  return (
    <FlatList
      style={{ backgroundColor: "black", marginTop: 10 }}
      keyExtractor={(item, index) => index.toString()}
      data={res}
      renderItem={ (props) => <ItemFavorite navigation={navigation} {...props} /> }
    />
  );
}
