import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Navigation = ({ navFavorites, navMovies, navUser }) => {
  const route = useRoute();
  const { name } = route;
  return (
    <View style={styles.bottom}>
      <Icon
        raised
        name="star"
        type="font-awesome"
        color={name === "Favorites" ? "#ffc75f" : "white"}
        size={30}
        style={{ marginHorizontal: 10 }}
        onPress={navFavorites}
      />
      <Icon
        raised
        name="user"
        type="material-community"
        color={name === "SignIn" ? "#ffc75f" : "white"}
        size={30}
        style={{ marginHorizontal: 10 }}
        onPress={navUser}
      />
      <Icon
        raised
        name="list"
        type="material-community"
        color={name === "Movies" ? "#ffc75f" : "white"}
        size={30}
        style={{ marginHorizontal: 10 }}
        onPress={navMovies}
      />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    position: "absolute",
    width: 150,
    left: 10,
    right: 0,
    bottom: 10,
    zIndex: 10,
  },
});
