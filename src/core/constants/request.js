import axios from "axios";
import APP_CONFIG from "./app-config";

const getBaseUrl = () => {
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.split("/")?.slice(0, 3).join("/");
  return baseUrl;
};

const instance = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
});

instance.interceptors.request.use(
  (config) => {
    // const token = getLocalAccessToken();
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Credentials"] = "*";
    // if (token) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    //   //   config.headers["x-auth-token"] = token;
    // }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (res.status == 401) {
      console.log("ssssshereeeeeeeeeeeeeeeeee");
      // Remove the token from local storage
      //   localStorage.removeItem("token");
    }
    return res;
  },
  async (err) => {
    try {
      // console.clear();
      // const token = getLocalAccessToken();
      if (err.code === "ERR_NETWORK" || err.code === "ECONNABORTED") {
        return Promise.reject(err);
      }

      if (err.response?.status === 401) {
        // Remove the token from local storage
        // localStorage.removeItem("token");
        // window.location.href = `${getBaseUrl()}/auth/`;
        console.log("ssereafdgfbh");
        return Promise.reject(err); // Return the error to be handled by the caller
      }

      if (err.response?.status === 404) {
        return Promise.reject(err); // Return the error to be handled by the caller
      }

      // If none of the conditions match, just return the error
      return Promise.reject(err);
    } catch (_error) {
      // Handle other errors or return Promise.reject(_error);
      return Promise.reject(_error);
    }
  }
);

export default instance;
