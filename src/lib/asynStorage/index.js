import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataMerge = async (value, callback) => {
  try {
    await AsyncStorage.mergeItem("@favorites", JSON.stringify(value));
    callback(null, true);
  } catch (e) {
    callback(e, false);
  }
};

export const storeDataSet = async (value, callback) => {
  try {
    await AsyncStorage.setItem("@favorites", JSON.stringify(value));
    callback(null, true);
  } catch (e) {
    callback(e, false);
  }
};

export const removeFavorite = async (movieId, callback) => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favorites");
    if (jsonValue != null) {
      const json = JSON.parse(jsonValue);
      delete json[movieId];
      storeDataSet(json, callback);
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favorites");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(err);
    return false;
  }
};
