import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { ActivityIndicator } from "react-native";
import {
  storeDataMerge,
  removeFavorite,
  getFavorites,
} from "@src/lib/asynStorage";
import useStateWithPromise from "../../hooks/useStateWithPromise";

const ButtonFavoriteDump = ({ onPress, favorite }) => (
  <Icon
    raised
    name={favorite ? "star" : "star-o"}
    type="font-awesome"
    color="#ffc75f"
    size={20}
    style={{ marginLeft: 10 }}
    onPress={onPress}
  />
);

const searchMovieId = async (movieId) => {
  try {
    const favorites = await getFavorites();
    if (Object.prototype.hasOwnProperty.call(favorites, movieId)) {
      return new Promise.resolve(true);
    }
    return new Promise.resolve(false);
  } catch (error) {
    return new Promise.resolve(false);
  }
};
const handleErrors = (err) => {
  if (err) {
    console.error(err);
    return 0;
  }
};
export default function ButtonFavoriteSmart(props) {
  const [favorite, setFavorite, loading] = useStateWithPromise(
    searchMovieId(props.movieId)
  );
  const handleFavorites = () => {
    const { movieId, original_title, poster_path } = props;
    const values = new Map();
    values[movieId] = { original_title, poster_path };
    if (!favorite) {
      storeDataMerge(values, (err, success) => {
        handleErrors(err);
        setFavorite(true);
      });
    } else {
      removeFavorite(movieId, (err, success) => {
        handleErrors(err);
        setFavorite(false);
      });
    }
  };
  if (loading) return <ActivityIndicator color="red" />;
  return <ButtonFavoriteDump favorite={favorite} onPress={handleFavorites} />;
}
