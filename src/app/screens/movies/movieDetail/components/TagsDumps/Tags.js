import React from "react";
import { View } from "react-native";
import { Subheading, Text } from "react-native-paper";

const Tags = ({ item: { label, value }, index }) => (
  <View
    style={{
      borderRadius: 20,
      padding: 10,
    }}
    key={`tags-${index}`}
  >
    <Subheading style={{ textAlign: "center", color: "#888" }}>
      {label}
    </Subheading>
    <Text style={{ textAlign: "center" }}>{value}</Text>
  </View>
);
export default Tags;
