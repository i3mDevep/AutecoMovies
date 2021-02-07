import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingDump = () => (
  <View
    style={{
      width: "100%",
      padding: 50,
      alignContent: "center",
      flex: 1,
      justifyContent: "center",
    }}
  >
    <ActivityIndicator color="red" animating={true} />
  </View>
);
export default LoadingDump;
