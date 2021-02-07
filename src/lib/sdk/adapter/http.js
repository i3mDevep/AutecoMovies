import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res) => {
    console.log(
      "%c Request Success:",
      "color: #4CAF50; font-weight: bold",
      res
    );
    return res;
  },
  (err) => {
    console.log("%c Request Error:", "color: #EC6060; font-weight: bold", err);
    let newError = err;
    if (!err.response) {
      const message = "Network not available";
      newError = Object.assign(err, { response: { data: { message } } });
    }
    if (err.response.status === 408 || err.response.status === "ECONNABORTED") {
      const message = `A time happend on url ${err.config.url}`;
      newError = Object.assign(err, { response: { data: { message } } });
    }
    if (err.response.status === 500) {
      const message = "The execution of the service failed in some way.";
      newError = Object.assign(err, { response: { data: { message } } });
    }

    return Promise.reject(newError);
  }
);

const API = {
  config: {
    api_host: "https://api.themoviedb.org/3",
    api_key: "2a16d0554b704896e6affbee64fac4e4",
  },

  parseParams(params) {
    const entries = Object.entries(params);
    const { hasFiles, keys } = entries.reduce(
      (current, [key, value]) => {
        return current;
      },
      { hasFiles: false, keys: [] }
    );

    if (!hasFiles) {
      instance.defaults.headers["Content-Type"] = "application/json";
      return params;
    }

    instance.defaults.headers["Content-Type"] = "multipart/form-data";

    const data = new FormData();
    entries.forEach(([key, value]) => {
      if (
        value instanceof FileList ||
        (Array.isArray(value) && keys.includes(key))
      ) {
        if (value.length === 1) {
          data.append(key, value[0]);
        } else {
          for (let idx = 0; idx < value.length; idx += 1) {
            data.append(key, value[idx]);
          }
        }

        return null;
      }

      data.append(key, value);
      return null;
    });

    return data;
  },

  READ(route, params, callback) {
    return API.exec(route, params, "GET", callback);
  },

  CREATE(route, params, callback) {
    return API.exec(route, params, "POST", callback);
  },

  UPDATE(route, params, callback) {
    return API.exec(route, params, "PUT", callback);
  },

  PARTIAL_UPDATE(route, params, callback) {
    return API.exec(route, params, "PATCH", callback);
  },

  DELETE(route, params, callback) {
    return API.exec(route, params, "DELETE", callback);
  },

  exec(route, params, verb, callback) {
    const host = API.config.api_host;
    const apiBase = API.config.api_base_uri;
    const apiKey = API.config.api_key;

    const data = API.parseParams(params);
    let url = `${host}${route}?api_key=${apiKey}`.replace(
      /\/?$/,
      ""
    );

    if (verb === "GET") {
      const queryString = Object.keys(data)
        .map((key) => `${key}=${data[key]}`)
        .join("&");
      url = `${url}&${queryString}`;
    }

    const options = Object.assign(
      {
        method: verb,
      },
      data && (verb === "POST" || verb === "PUT" || verb === "PATCH")
        ? { data }
        : null
    );

    return instance(url, options)
      .then((response) => callback(null, response.data))
      .catch((error) => callback(error.response.data, null));
  },
};

export default API;
