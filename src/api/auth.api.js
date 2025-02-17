// @license Apache-2.0
// @copyright Payal Yadav

import apiConfig from "../config/api.config.js";
import axiosConfig from "../config/axios.config.js";

const getToken = async (code) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "authorization_code",
      code,
      redirect_uri: apiConfig.redirectUri,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default { getToken };
