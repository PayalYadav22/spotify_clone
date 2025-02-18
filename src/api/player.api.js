// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";
import apiConfig from "../config/api.config.js";

/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @param {number} defaultLimit - number
 * @returns {Object}
 */

export const getRecentlyPlayer = async (
  req,
  defaultLimit = apiConfig.defaultLimit
) => {
  const { data: recentlyPlayer } = await getDate(
    `me/player/recently-played?limit=${defaultLimit}`,
    req.cookies.access_token
  );
  return recentlyPlayer;
};
