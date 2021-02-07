import React, { useEffect, useReducer } from "react";
import { apiReducer, initialState } from "@src/lib/utils/helper/apiHelper";
import CommentDumps from "../../components/CommentsDumps";
import resources from "@src/lib/sdk/resource";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Title } from "react-native-paper";

export default function CommentSmart({ movieId }) {
  const [movieReview, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: "REQUESTED_API" });
    resources.moviesPopular.reviews(movieId, (err, data) => {
      if (err) {
        dispatch({ type: "ERROR_API", payload: err });
        alert("mal");
        return 0;
      }
      dispatch({ type: "SUCCESS_API", payload: data });
    });
  }, []);

  if (!movieReview.message || movieReview.isLoading)
    return <ActivityIndicator color="red" animating={true} />;

  return (
    <View>
      <Title>
        {movieReview.message.results.length
          ? movieReview.message.results.length + " comments"
          : "0 comments"}
      </Title>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={CommentDumps}
        data={movieReview.message.results}
      />
    </View>
  );
}
