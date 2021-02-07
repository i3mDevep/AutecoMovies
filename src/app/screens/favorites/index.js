import React from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import ListFavoriteSmart from "./containers/ListFavorites";
import ScreenWithNavigation from "../../layouts/ScreenWithNavigation";

export default function Favorites({ navigation }) {
  return (
    <ScreenWithNavigation navigation={navigation}>
      <View style={{ flex: 1, backgroundColor: "black", paddingTop: 50 }}>
        <Title style={{ marginLeft: 10 }}>List Favorites</Title>
        <ListFavoriteSmart navigation={navigation} />
      </View>
    </ScreenWithNavigation>
  );
}
