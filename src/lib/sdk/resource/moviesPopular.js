import Api from "../adapter/http";

export default {
  list: (params, callback) => Api.READ("/movie/popular", params, callback),
  retrieve: (id, callback) => Api.READ(`/movie/${id}`, "", callback),
  reviews:  (id, callback) => Api.READ(`/movie/${id}/reviews`, "", callback),
};
