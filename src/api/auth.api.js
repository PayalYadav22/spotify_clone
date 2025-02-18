// @license Apache-2.0
// @copyright Payal Yadav

import apiConfig from "../config/api.config.js";
import { token } from "../config/axios.config.js";

export const getToken = async (code) => {
  try {
    const response = await token.post("/token", {
      grant_type: "authorization_code",
      code,
      redirect_uri: apiConfig.redirectUri,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
