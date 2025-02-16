// @license Apache-2.0
// @copyright Payal Yadav

import queryString from "query-string";
import apiConfig from "../config/api.config.js";
import { generateRandomString } from "../utils/helper.utils.js";

const auth = (req, res) => {
  const /** string */ state = generateRandomString(16);
  res.cookie(apiConfig.stateKey, state);
  res.redirect(
    `https://accounts.spotify.com/authorize?${queryString.stringify({
      response_type: "code",
      client_id: apiConfig.clientId,
      scope: apiConfig.scopes,
      redirect_uri: apiConfig.redirectUri,
      state,
    })}`
  );
};

export default auth;
