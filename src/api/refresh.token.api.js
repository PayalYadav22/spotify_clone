// @license Apache-2.0
// @copyright Payal Yadav

import axiosConfig from "../config/axios.config.js";
/**
 * @param {string} refreshToken
 * @return {object}
 */
const getRefreshToken = async (refreshToken) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getRefreshToken };
