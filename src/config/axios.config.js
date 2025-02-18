// @license Apache-2.0
// @copyright Payal Yadav

import axios from "axios";
import apiConfig from "./api.config.js";

const baseUri = `${apiConfig.authUri}api`;
export const token = axios.create({
  baseURL: baseUri,
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(`${apiConfig.clientId}:${apiConfig.clientSecret}`).toString(
        "base64"
      ),
    "content-type": "application/x-www-form-urlencoded",
  },
});

/**
 * axios instance for all api request
 */
const api = axios.create({ baseURL: apiConfig.apiUri });

/**
 * Makes a request to the API using the provided URL and access token.
 * @param {string} apiUrl - The URL of the API endpoint.
 * @param {string} access_token - The access token for authorization.
 * @returns {Promise} A promise that resolves with the response of the API request.
 */

export const getDate = async (apiUrl, access_token) => {
  try {
    const response = await api.get(`${apiUrl}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
