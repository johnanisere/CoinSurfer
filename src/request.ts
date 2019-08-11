// axiosconfig.js
import axios from "axios";
import env from "./environment";

// configure base url
const instance = axios.create({
  baseURL: `${env.apiUrl}/v1`
});

// intercept requests and add token
instance.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      "X-CMC_PRO_API_KEY": `${env.apiSecret}`
    }
  };
});

export default instance;
