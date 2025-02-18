// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";

/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @param {object} ids - object of artist or track ids string
 * @param {number} lowLimit - number
 * @returns {Object}
 */

export const getTrack = async (req, ids, lowLimit) => {
  const { data: track } = await getDate(
    `tracks?ids=${ids}&limit=${lowLimit}`,
    req.cookies.access_token
  );
  return track;
};
