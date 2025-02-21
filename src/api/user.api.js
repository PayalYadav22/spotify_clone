// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";
/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @returns {Object}
 */

export const getProfile = async (req) => {
  const { data: currentProfile } = await getDate(
    "me",
    req.cookies.access_token
  );
  return currentProfile;
};
