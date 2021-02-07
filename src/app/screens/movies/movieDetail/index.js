import React from "react";

import { ScrollView } from "react-native";
import DetailsSmart from "./containers/DetailsSmart";
import CommentSmart from "./containers/CommentSmart";
import { LogBox } from "react-native";

const MyComponent = ({ route }) => {
  const {
    params: { movieId },
  } = route;
  React.useEffect(() => {
    LogBox && Object.prototype.hasOwnProperty.call(LogBox, "ignoreLogs") &&
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <DetailsSmart movieId={movieId} />
      <CommentSmart movieId={movieId} />
    </ScrollView>
  );
};

export default MyComponent;
