// @license Apache-2.0
// @copyright Payal Yadav

/**
 * Generates a random alphanumeric string of the specified length.
 * @param {number} length - The length of the string to generate.
 * @returns {string} - A random alphanumeric string.
 */

import apiConfig from "../config/api.config.js";

export const generateRandomString = (length) => {
  let /* {string} */ randomString = "";
  const /* {string} */ possibleLetter =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length - 1; i++) {
    const /** {number} */ randomIndex = Math.floor(
        Math.random() * possibleLetter.length
      );
    randomString += possibleLetter[randomIndex];
  }

  return randomString;
};


/** 
 * @param {object} params
 * @param {number} [params.page = 1]
 * @param {number} [limit=apiConfig.defaultLimit]
 * @returns { object }
*/

export const getUrlQuery = ({params, limit = apiConfig.defaultLimit}) => {
  const { page = 1 } = params || {} ;
  const offset = (limit * page) - limit;
  return { limit, offset, page }
}




