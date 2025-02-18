// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";
import apiConfig from "../config/api.config.js";

/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @param {number} artistsId - number
 * @returns {Object}
 */

export const getSeveralArtists = async (
  req,
  artistsId
) => {
  const { data: trackArtists } = await getDate(
    `artists?ids=${artistsId}`,
    req.cookies.access_token
  );
  return trackArtists;
};
