// @license Apache-2.0
// @copyright Payal Yadav

import axiosConfig from "../config/axios.config.js";
/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @returns {Object}
 */

const getProfile = async (req, res) => {
  const { data: currentProfile } = await axiosConfig.getDate(
    "me",
    req.cookies.access_token
  );
  return currentProfile;
};

export { getProfile };
