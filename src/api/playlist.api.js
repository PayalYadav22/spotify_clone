// @license Apache-2.0
// @copyright Payal Yadav

import { getDate } from "../config/axios.config.js";
import { getUrlQuery } from "../utils/helper.utils.js"
/**
 * Get profile details information about user
 * @param {object} req - server request object
 * @param {number} itemLimit - number
 * @returns {Object}
 */

export const getPlaylist = async (req, itemLimit) => {
    const { offset, limit, page }  = getUrlQuery(req.params, itemLimit)
    const { data : playlist } = await getDate(`me/playlists?limit=${limit}&offset=${offset}`,req.cookies.access_token)
    return { baseUrl:req.baseUrl, playlist, page }
}



