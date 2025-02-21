// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";
import { getUrlQuery } from "../utils/helper.utils.js";
/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @param {number} albumsId - number
 * @returns {Object}
 */

export const getNewRelease = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);
  const {
    data: { albums: newRelease },
  } = await getDate(
    `browse/new-releases?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );
  return { baseUrl: req.baseUrl, page, ...newRelease };
};
