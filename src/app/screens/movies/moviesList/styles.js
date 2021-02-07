import React from "react";
import { View, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo";


export const Container = ({ children }) => (
  <View style={{ flex: 1, backgroundColor: "black", paddingVertical: 10 }}>
    {children}
  </View>
);

export const WrapperHeader = ({ children }) => (
  <View
    style={{
      marginTop: "auto",
      padding: 3,
      flexDirection: "row",
    }}
  >
    {children}
  </View>
);

export const IconMovie = ({ ...props }) => (
  <Icon
  raised
  name="video-camera"
  type="Entypo"
  color="#ffc75f"
  size={30}
  style={{ marginHorizontal: 10 }}
/>
);

export const BackgroundHeader = ({ children }) => (
  <ImageBackground
    source={{
      uri: `https://i.gadgets360cdn.com/large/netflix_best_movies_may_2020_1589355119754.jpg`,
    }}
    style={{ width: "100%", height: 200 }}
  >
    {children}
  </ImageBackground>
);
