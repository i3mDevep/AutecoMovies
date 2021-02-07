import React, { useEffect, useReducer } from "react";
import { apiReducer, initialState } from "@src/lib/utils/helper/apiHelper";
import DetailContentDumps from "../../components/DetailContentDumps";
import TagsComponentDumps from "../../components/TagsDumps";
import resources from "@src/lib/sdk/resource";
import { ActivityIndicator } from "react-native";
import { timeConvert } from "@src/lib/utils/formmater";
import { languages } from "@src/lib/const";
import ButtonFavorite from "@src/app/common/ButtonFavorite";

export default function DetailsSmart({ movieId }) {
  const [movieDetail, dispatch] = useReducer(apiReducer, initialState);
  useEffect(() => {
    dispatch({ type: "REQUESTED_API" });
    resources.moviesPopular.retrieve(movieId, (err, data) => {
      if (err) {
        dispatch({ type: "ERROR_API", payload: err });
        return 0;
      }
      dispatch({ type: "SUCCESS_API", payload: data });
    });
  }, []);
  let tags = [];
  if (movieDetail.message) {
    const { original_language } = movieDetail.message;
    const key =
      Object.prototype.hasOwnProperty.call(
        languages["primary-dialects"],
        original_language
      ) && languages["primary-dialects"][original_language];
    tags.push({
      label: "Language",
      value: languages["language-names"][key || "id-ID"][1],
    });
    tags.push({
      label: "Duration",
      value: timeConvert(movieDetail.message.runtime),
    });
    tags.push({ label: "Average", value: movieDetail.message.vote_average });
    tags.push({ label: "Count", value: movieDetail.message.vote_count });
    tags.push({ label: "Status", value: movieDetail.message.status });
  }
  if (!movieDetail.message || movieDetail.isLoading)
    return <ActivityIndicator color="red" animating={true} />;

  return (
    <DetailContentDumps
      {...movieDetail.message}
      favorite={{
        Component: ButtonFavorite,
        json: { movieId, ...movieDetail.message },
      }}
      tags={{ data: tags, Component: TagsComponentDumps }}
    />
  );
}
