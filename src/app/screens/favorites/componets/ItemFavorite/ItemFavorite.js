import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { baseCDNW200 } from "@src/lib/const";
import TouchableScale from "react-native-touchable-scale";

const ItemFavorite = ({ item, navigation }) => (
  <ListItem
    onPress={() =>
      navigation.navigate("Details", {
        movieId: item.movieId,
      })
    }
    Component={TouchableScale}
    containerStyle={{
      margin: 5,
      padding: 5,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
      borderRadius: 100,
    }}
    friction={90} //
    tension={100}
    activeScale={0.9} //
  >
    <Avatar
      size="medium"
      rounded
      source={{ uri: `${baseCDNW200}${item.poster_path}` }}
    />
    <ListItem.Content>
      <ListItem.Title style={{ color: "white" }}>
        {item.original_title}
      </ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);

export default ItemFavorite;
