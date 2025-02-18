// @license Apache-2.0
// @copyright Payal Yadav

import { token } from "../config/axios.config.js";
/**
 * @param {string} refreshToken
 * @return {object}
 */
export const getRefreshToken = async (refreshToken) => {
  try {
    const response = await token.post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
