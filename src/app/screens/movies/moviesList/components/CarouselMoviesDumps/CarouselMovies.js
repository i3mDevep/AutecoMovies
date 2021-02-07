import React from "react";
import {
  FlatList,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";

import { baseCDNW200 } from "@src/lib/const";

const CarouselListMovies = ({ movies, detailClick }) => {
  const MovieItem = ({ item: { poster_path, id }, index }) => (
    <TouchableOpacity
      key={`carousel-item-${index}`}
      onPress={() => detailClick(id)}
    >
      <ImageBackground
        source={{ uri: `${baseCDNW200}${poster_path}` }}
        style={{ width: 130, height: 200 }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={movies}
        renderItem={MovieItem}
      />
    </View>
  );
};
export default CarouselListMovies;
